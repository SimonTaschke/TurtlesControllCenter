import platform
import random
import time
import logging.handlers
from sensor.ds20b18 import ds20b18

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s %(levelname)-8s %(message)s')
fileHandler = logging.handlers.RotatingFileHandler('./log/turtleHomeManager.log', mode='w', maxBytes=1 * 1e6)
fileHandler.setFormatter(formatter)
fileHandler.setLevel(logging.INFO)
consoleHandler = logging.StreamHandler()
consoleHandler.setFormatter(formatter)
consoleHandler.setLevel(logging.WARNING)
logger.addHandler(fileHandler)
logger.addHandler(consoleHandler)

def checkHWSupport():
    logger.info('Checking for Operating system')
    if platform.linux_distribution()[0] == "Ubuntu":
        isRealHW = 0
        logger.info('Running on ubuntu machine. Do not use real sensor information.')
    elif platform.linux_distribution()[0] == "debian": # pi
        isRealHW = 1
        logger.info('Running on Raspberry. Use real sensor information.')
    else:
        logger.critical("Unknown Distribution " + platform.linux_distribution()[0] + " Stop Turtle Home Manager!")
        exit()
    return isRealHW

def initializeTemperaturSensor(temperaturSensorCfg):
    logger.info('Initialize temperature sensors')
    temperatureSensor = []
    for iSensor in temperaturSensorCfg:
        logger.info('Add new temperatursensor.\t serial: {}\t location: {}'.format(iSensor["serial"], iSensor["location"]))
        temperatureSensor.append(ds20b18(iSensor["serial"], iSensor["location"], iSensor["name"]))
    return temperatureSensor

def manageTurtleHome(turtelHomeManagerCfg, temperatureDatabase, deviceDatabase):
    logger.info('Starting turtle home manager')
    isRealHW = checkHWSupport()
    temperatureSensorCfg = turtelHomeManagerCfg["temperature"]["sensor"]
    virtualTemperatureSensorCfg = turtelHomeManagerCfg["temperature"]["virtualSensor"]
    deviceCfg = turtelHomeManagerCfg["devices"]

    temperatureSensor = initializeTemperaturSensor(temperatureSensorCfg)
    measurementIntervall = temperatureDatabase.getMeasurementIntervall()

    last_heating_temperature = None

    while True:
        logger.info("Start new measurement epoch.")
        startTime = time.time()

        ## Read Sensordata
        temperatureData = {}
        if isRealHW:
            for iSensor in temperatureSensor:
                # Measure Temperature
                try:
                    temperature = iSensor.getTemperatur()
                    logger.info("Read temperature {} from sensor {}".format(temperature, iSensor.serial))
                except:
                    temperature = None
                    logger.info("Could not read temperature from sensor {}. Set temperature to None.".format(iSensor.serial))
                temperatureData[iSensor.name] = round(temperature, 1)
        else:
            i = 0
            for iSensor in temperatureSensor:
                # Emulate Temperature
                temperature = i * 5 + random.randint(0, 4) + random.uniform(0.0, 1.0)
                logger.info("Emulate temperature {} for sensor {}".format(temperature, iSensor.serial))
                temperatureData[iSensor.name] = round(temperature, 1)
                i+= 1

        ## Create virtual temperature measurements
        for virtualSensor in virtualTemperatureSensorCfg:
            temperature = 0.0
            for iSensor in virtualSensor["cummulateSensors"]:
                temperature += temperatureData[iSensor]
            temperatureData[virtualSensor["name"]] = round(temperature/len(virtualSensor["cummulateSensors"]), 1)

        ## Check device state
        if last_heating_temperature is None:
            deltaTemperature = -1
        else:
            deltaTemperature = temperatureData[deviceCfg["heating"]["heatingController"]] - last_heating_temperature

        last_heating_temperature = temperatureData[deviceCfg["heating"]["heatingController"]]
        if deltaTemperature > deviceCfg["heating"]["detectionTreshhold"]:
            heatingState = 1
        else:
            heatingState = 0
        logger.info("Set heating state to {}.".format(heatingState))

        lightState = random.randint(0, 1)
        logger.info("Set light state to {}.".format(lightState))

        ## Store Sensordata to database
        temperature = []
        _, _, _, sensorOrder, _= temperatureDatabase.getData("1s", "1s", "AVERAGE")  # Last data is random on Pi
        for sensor in sensorOrder:
            temperature.append(temperatureData[sensor])
        try:
            temperatureDatabase.update(temperature)
        except:
            logger.error("Could not update temperature database.")

        ## Store Device data to database
        try:
            deviceDatabase.update([heatingState, lightState])
        except:
            logger.error("Could not update device database.")

        # Sleep
        deltaTime = (startTime + measurementIntervall) - time.time()
        if deltaTime < 0:
            logger.error("Could not fetch measurements in time. Took {} seconds to long".format(deltaTime))
        else:
            logger.info("Finished measurement epoch. Wait {} seconds.".format(deltaTime))
            time.sleep(deltaTime)
