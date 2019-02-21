import redis
import time
import json
import os
import rrdtool
from datetime import datetime
import numpy as np

r = redis.Redis()


class RrdHandler:
    def __init__(self, filename, measurement_intervall, sensor_names, statistics):
        self.filename = filename
        self.sensor_names = sensor_names

        if os.path.isfile(self.filename):
            print('Database already exists. Do not overwrite.')
        else:
            sensors = ()
            for i_sensor in self.sensor_names:
                print(i_sensor)
                sensors += ("DS:" + i_sensor + ":GAUGE:" + str(2 * measurement_intervall) + ":U:U", )

            statistic = ()
            for json in statistics:
                period = json["period"]
                resolution = json["resolution"]
                for type in json["type"]:
                    statistic += ("RRA:" + type + ":0.5:" + resolution + ":" + period, )

            rrdtool.create(
                self.filename,
                "--step", str(measurement_intervall),
                "--no-overwrite",
                *sensors,
                *statistic)

    def update(self, dict):
        response = rrdtool.lastupdate(self.filename)
        data_string = 'N'
        for sensor in response["ds"]:
            data_string = data_string + ":" + str(dict[sensor])
        rrdtool.update(self.filename, data_string)

    def getData(self, period, resolution, type, display_sensors):
        keys = []
        measurements = np.array([])
        config = json.loads(r.get("temperature_config").decode('utf-8'))
        dictionary = config["sensor_dictionary"]

        for i_type in type:
            # period        requested time interval as string, e.g. 1s
            # resolution    data resolution as string, e.g 1s, 15m, 1d
            result = rrdtool.fetch(self.filename,
                                   i_type,
                                   "--align-start",
                                   "--resolution", resolution,
                                   "--start", "-" + period)

            if i_type == "AVERAGE":
                suffix = ""
            elif i_type == "MIN":
                suffix = " min"
            elif i_type == "MAX":
                suffix = " max"
            measurement = np.array(result[2])
            sensors = result[1]

            for i in range(len(sensors)):
                if sensors[i] in display_sensors:
                    keys.append(dictionary[sensors[i]] + suffix)
                    if measurements.size == 0:
                        measurements = measurement[:, i]
                    else:
                        measurements = np.vstack((measurements, measurement[:, i]))

        time = []
        starttime, endtime, step = result[0]
        nTimeStamps = int((endtime - starttime) / step)
        for i_time in range(0, nTimeStamps):
            timeStamp = datetime.fromtimestamp(starttime + (i_time * step))
            timeObj = {}
            timeObj["year"] = timeStamp.strftime('%Y')
            timeObj["month"] = timeStamp.strftime('%m')
            timeObj["day"] = timeStamp.strftime('%d')
            timeObj["hour"] = timeStamp.strftime('%H')
            timeObj["min"] = timeStamp.strftime('%M')
            timeObj["sec"] = timeStamp.strftime('%S')
            time.append(timeObj)
        data = []
        for i_key in range(len(keys)):
            data.append({"legendName": keys[i_key], "data": list(measurements[i_key, :])})
        return {"time": time, "data": data}

def main():
    config = json.loads(r.get("temperature_config"))
    sensors = []
    for i_sensor in config["sensor"]:
        sensors.append(i_sensor["name"])
    for i_sensor in config["virtual_sensor"]:
        sensors.append(i_sensor["name"])

    rrd = RrdHandler("test.rrd", 5, sensors, config["statistics"])
    p = r.pubsub()
    p.subscribe('temperature')

    statistics_old = None

    while True:
        message = p.get_message()
        if message is not None:
            if message["type"] == "message":
                rrd.update(json.loads(message["data"]))
                for i_statistic in config["statistics"]:
                    period = i_statistic["period"]
                    type = i_statistic["type"]
                    sensors = i_statistic["display"]
                    resolution = i_statistic["resolution"]
                    statistics = (rrd.getData(period, resolution, type, sensors))
                    r.publish("temperature:statistics:{}".format(period), json.dumps(statistics))
                    r.set("temperature:statistics:{}".format(period), json.dumps(statistics))
        time.sleep(1)
