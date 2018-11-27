import rrdtool
import time
import os.path

class rrd_handler:
    def __init__(self, name, measurementIntervall, minTempDeg, maxTempDeg, sensorNames, statistics):
        self.name = name
        self.minTempDeg = minTempDeg
        self.maxTempDeg = maxTempDeg
        self.measurementIntervall = measurementIntervall
        self.statistics = statistics
        self.sensorNames = sensorNames

        # Create DB
        self.starttime = int(time.time())
        self.create()

    def getMeasurementIntervall(self):
        return self.measurementIntervall

    def create(self):
        if os.path.isfile(self.name):
            print('Database already exists. Do not overwrite.')
        else:
            sensors = ()
            for iSensor in self.sensorNames:
                print(iSensor)
                sensors += ("DS:" + iSensor + ":GAUGE:" + str(2 * self.measurementIntervall) + ":" + str(self.minTempDeg) + ":" + str(self.maxTempDeg), )

            print(sensors)

            statistic = ()
            for json in self.statistics:
                period = json["period"]
                resolution = json["resolution"]
                for type in json["type"]:
                    statistic += ("RRA:" + type + ":0.5:" + resolution + ":" + period, )

            rrdtool.create(
                self.name,
                "--start", str(self.starttime),
                "--step", str(self.measurementIntervall),
                "--no-overwrite",
                *sensors,
                *statistic)

    def update(self, data):
        # data          list of dataValues for current epoch

        dataString = 'N'
        for value in data:
            dataString = dataString + ":" + str(value)
        rrdtool.update(self.name, dataString)


    def getData(self, period, resolution, type):
        # period        requested time interval as string, e.g. 1s
        # resolution    data resolution as string, e.g 1s, 15m, 1d
        result = rrdtool.fetch(self.name,
                               type,
                               "--align-start",
                               "--resolution", resolution,
                               "--start", "-" + period)
        starttime, endtime, step = result[0]
        keys = result[1]
        data = result[2]
        return starttime, endtime, step, keys, data

    def getLastInput(self):
        result = rrdtool.lastupdate(self.name)
        time = result['date']
        data = result['ds']
        return time, data

if __name__ == "__main__":
    database = "temperature.rrd"
    starttime = int(time.time())
    measurementIntervall = 1
    heartbeatS = 5
    minTempDeg = -20
    maxTempDeg = 60

    myDatabase = TemperatureDatabase(database, starttime, measurementIntervall, heartbeatS, minTempDeg, maxTempDeg)

    for step in range(10):
        time.sleep(1)
        temperatureIn1 = 1
        temperatureIn2 = 2
        temperatureInMean = (temperatureIn1 + temperatureIn2) / 2
        temperatureOut = 4
        temperatureData = [temperatureIn1, temperatureIn2, temperatureInMean, temperatureOut]
        myDatabase.update(int(time.time()), temperatureData)
        print("update " + str(step))

    print(myDatabase.getData("15m", "1s"))
