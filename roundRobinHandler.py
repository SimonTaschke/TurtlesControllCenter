import redis
import time
import json
import os
import rrdtool
from datetime import datetime


def rrdCreate(sensor, step, statistics):
    fielname = sensor + ".rrd"
    if os.path.isfile(fielname):
        print('Database already exists. Do not overwrite.')
    else:
        statistic = ()
        for json in statistics:
            period = json["period"]
            resolution = json["resolution"]
            for type in json["type"]:
                statistic += ("RRA:" + type + ":0.5:" + resolution + ":" + period,)

        rrdtool.create(fielname,
            "--step", str(step),
            "--no-overwrite",
            "DS:" + sensor + ":GAUGE:" + str(2 * step) + ":U:U",
            *statistic)

def rrdUpate(sensor, time, value):
    rrdtool.update("{}.rrd".format(sensor), "{}:{}".format(time, value))

def rrdGetStatistics(sensor, period, resolution, type):
    result = rrdtool.fetch("{}.rrd".format(sensor),
                           type,
                           "--align-start",
                           "--resolution", resolution,
                           "--start", "-" + period)
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
    # time_info = result[0]
    # time = list(np.arange(time_info[0], time_info[1], time_info[2]))
    data = [i[0] for i in result[2]]
    return time, data


def main():
    # create cumulation type dictionary
    type_dictionary = {}
    type_dictionary["AVERAGE"] = ""
    type_dictionary["MIN"] = " min"
    type_dictionary["MAX"] = " max"

    # connect to redis
    r = redis.Redis()
    config = json.loads(r.get("temperature_config"))

    # create rrd database for each sensor
    rrd_dictionary = {}
    for sensor in config["sensor"]:
        rrdCreate(sensor["rrdName"], 5, config["statistics"])
        rrd_dictionary[sensor["name"]] = sensor["rrdName"]
    for sensor in config["virtual_sensor"]:
        rrdCreate(sensor["rrdName"], 5, config["statistics"])
        rrd_dictionary[sensor["name"]] = sensor["rrdName"]

    # subscribe temperature data
    p = r.pubsub()
    p.subscribe('temperature')

    while True:
        message = p.get_message()
        if message is not None:
            if message["type"] == "message":

                # Update database
                time_now = time.time()
                message = json.loads(message["data"])
                for sensor in message:
                    rrdUpate(rrd_dictionary[sensor], time_now, message[sensor])

                # Get and pusblish statistics data
                for statistic in config["statistics"]:
                    period = statistic["period"]
                    resolution = statistic["resolution"]
                    stats = {}
                    stats["data"] = []

                    for sensor in statistic["sensor"]:
                        for type in statistic["type"]:
                            stats_time, data = rrdGetStatistics(rrd_dictionary[sensor], period, resolution, type)
                            stats["time"] = stats_time
                            stats["data"].append({"legendName": sensor + type_dictionary[type], "data": data})
                    r.publish("temperature:statistics:{}".format(period), json.dumps(stats))
                    r.set("temperature:statistics:{}".format(period), json.dumps(stats))

        time.sleep(1)
