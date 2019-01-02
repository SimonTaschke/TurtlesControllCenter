import manageTurtleHome as turtelHomeManager
import web.app as webserver
from database.rrd_Database import rrd_handler
import json
import multiprocessing
import logging.handlers
import os
import platform

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s %(levelname)-8s %(message)s')
fileHandler = logging.handlers.RotatingFileHandler('./log/supervisor.log', mode='w', maxBytes=1 * 1e6)
fileHandler.setFormatter(formatter)
fileHandler.setLevel(logging.INFO)
consoleHandler = logging.StreamHandler()
consoleHandler.setFormatter(formatter)
consoleHandler.setLevel(logging.INFO)
logger.addHandler(fileHandler)
logger.addHandler(consoleHandler)

logger.info("Start main program.")

## Turn off raspberry pi onboard LEDs
# Set the PWR LED to GPIO mode (set 'off' by default).
if (platform.linux_distribution()[0] == "debian"):
    logger.info("Turn off raspberry pi onboard LEDs")
    os.system("echo gpio | sudo tee /sys/class/leds/led1/trigger")
    os.system("echo 0 | sudo tee /sys/class/leds/led1/brightness")

## Load ini File
logger.info("Read configuration file")
try:
    json_data=open('config.json').read()
except:
    logger.fatal("Cannot read configuration. File does not exist.")
config = json.loads(json_data)

turtelHomeManagerCfg = config['turtleHomeManager']
webserverCfg = config['webserver']

## Initialize temperatur database
logger.info("Create temperature database")
sensorNames = []
webserverCfg["name"] = {}
for iSensor in turtelHomeManagerCfg["temperature"]["sensor"]:
    sensorNames.append(iSensor["name"])

    # Add displaynames to webserver config
    webserverCfg["name"][iSensor["name"]] = iSensor["displayName"]


for iSensor in turtelHomeManagerCfg["temperature"]["virtualSensor"]:
    sensorNames.append(iSensor["name"])

    # Add displaynames to webserver config
    webserverCfg["name"][iSensor["name"]] = iSensor["displayName"]

temperatureDatabase = rrd_handler(config['turtleHomeManager']["temperature"]["database"]["file"],
                                  config['turtleHomeManager']["temperature"]["measurementIntervall"],
                                  config['turtleHomeManager']["temperature"]["minTempDeg"],
                                  config['turtleHomeManager']["temperature"]["maxTempDeg"],
                                  sensorNames,
                                  config['turtleHomeManager']["temperature"]["database"]["statistics"])

## Initialize device database
logger.info("Create device database")
deviceDatabase = rrd_handler(config['turtleHomeManager']["devices"]["database"]["file"],
                             config['turtleHomeManager']["temperature"]["measurementIntervall"],  # ToDo
                             0,
                             1,
                             ["Heizung", "Licht"],
                             config['turtleHomeManager']["devices"]["database"]["statistics"])

p1 = multiprocessing.Process(target = turtelHomeManager.manageTurtleHome, args=(turtelHomeManagerCfg, temperatureDatabase, deviceDatabase))
p2 = multiprocessing.Process(target = webserver.startWebserver, args = (webserverCfg, temperatureDatabase, deviceDatabase))

# Starting threads...
logger.info("Start turtle home manager")
p1.start()

logger.info("Start webserver")
p2.start()