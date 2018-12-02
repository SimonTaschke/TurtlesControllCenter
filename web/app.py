#!/usr/bin/env python
from datetime import datetime
import json
import time
from threading import Lock
from flask import Flask, render_template, session, request, send_file
from flask_socketio import SocketIO, emit, join_room, leave_room, rooms, close_room, disconnect
import logging.handlers

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on installed packages.
async_mode = None

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode=async_mode)
thread = None
thread_lock = Lock()

logger = logging.getLogger(__name__)
logger.setLevel(logging.INFO)
formatter = logging.Formatter('%(asctime)s %(levelname)-8s %(message)s')
fileHandler = logging.handlers.RotatingFileHandler('./log/webserver.log', mode='w', maxBytes=1 * 1e6)
fileHandler.setFormatter(formatter)
fileHandler.setLevel(logging.INFO)
consoleHandler = logging.StreamHandler()
consoleHandler.setFormatter(formatter)
consoleHandler.setLevel(logging.INFO)
logger.addHandler(fileHandler)
logger.addHandler(consoleHandler)

def translateTime(timeString):
    multiplier = {'s': 1, 'm': 60 , 'h': 60 * 60, 'd': 24 * 60 * 60}
    seconds = float(timeString[:-1]) * multiplier[timeString[-1]]
    return seconds

def translateDeviceState(state):
    if state == 1:
        return 'on'
    else:
        return 'off'

def prepareStatistics(starttime, endtime, step, keys, measurements, scaling):
    legendnames = []
    data = {}
    print(keys)
    for key in keys:
        legendnames.append(key)

    for iData in range(0, len(keys)):
        data[iData] = []

    time = []
    nTimeStamps = int((endtime - starttime) / step)
    for iTime in range(0, nTimeStamps):
        timeStamp = datetime.fromtimestamp(starttime + (iTime * step))
        timeObj = {}
        timeObj["year"] = timeStamp.strftime('%Y')
        timeObj["month"] = timeStamp.strftime('%m')
        timeObj["day"] = timeStamp.strftime('%d')
        timeObj["hour"] = timeStamp.strftime('%H')
        timeObj["min"] = timeStamp.strftime('%M')
        timeObj["sec"] = timeStamp.strftime('%S')
        time.append(timeObj)
        for iData in range(0, len(keys)):
            if measurements[iTime][iData] is None:
                data[iData].append(measurements[iTime][iData])
            else:
                data[iData].append(measurements[iTime][iData] * scaling)
    return legendnames, time, data

def background_thread():
    global thread
    logger.info('Start background thread.')
    lastupdate = {}
    timeNow = time.time()
    for intervall in statisticsCfg:
        lastupdate[intervall] = timeNow + 1 - (timeNow % translateTime(statisticsCfg[intervall]['temperature']['resolution']))  # 1 sec delay, database shall update first
        logger.info("Set last update for intervall \"{}\" to {}".format(intervall, datetime.fromtimestamp(lastupdate[intervall])))
    while len(clients) > 0:
        timeNow = time.time()
        sendStatusUpdate()
        for intervall in statisticsCfg:
            if (timeNow - lastupdate[intervall]) > translateTime(statisticsCfg[intervall]['temperature']['resolution']):
                sendStatistics(intervall, intervall)
                lastupdate[intervall] += translateTime(statisticsCfg[intervall]['temperature']['resolution'])
                logger.info("Set last update for intervall \"{}\" to {}".format(intervall, datetime.fromtimestamp(
                    lastupdate[intervall])))
        socketio.sleep(1)
    logger.info('Stop background thread')
    thread = None

def sendStatistics(intervall, room):
    period = statisticsCfg[intervall]['period']
    temperatureResolution = statisticsCfg[intervall]['temperature']['resolution']
    temperatureType = statisticsCfg[intervall]['temperature']['type']
    displayTemperatureSensor = statisticsCfg[intervall]["temperature"]['displaySensor']

    try:
        firstDataset = True
        statistics = {"time": [], "data": []}
        for iType in temperatureType:
            starttime, endtime, step, keys, measurements = temperatureDatabase.getData(period, temperatureResolution, iType)
            sensors, time, data = prepareStatistics(starttime, endtime, step, keys, measurements, 1)
            if firstDataset:
                statistics["time"] = time
                firstDataset = False
            if iType == "AVERAGE":
                for iData in range(0, len(sensors)):
                    if any(sensors[iData] in string for string in displayTemperatureSensor):
                        statistics["data"].append({"legendName": displayNames[sensors[iData]], "data": data[iData]})
            elif iType == "MAX":
                for iData in range(0, len(sensors)):
                    if any(sensors[iData] in string for string in displayTemperatureSensor):
                        statistics["data"].append({"legendName": displayNames[sensors[iData]] + " Max.", "data": data[iData]})
            elif iType == "MIN":
                for iData in range(0, len(sensors)):
                    if any(sensors[iData] in string for string in displayTemperatureSensor):
                        statistics["data"].append({"legendName": displayNames[sensors[iData]] + " Min.", "data": data[iData]})
        temperatureStatistics = json.dumps(statistics)
    except:
        logger.error("Could not read {} data from temperature database.".format(intervall))


    deviceResolution = statisticsCfg[intervall]['device']['resolution']
    try:
        statistics = {"time": [], "data": []}

        for iType in temperatureType:
            starttime, endtime, step, keys, measurements = deviceDatabase.getData(period, deviceResolution, "AVERAGE")
            legendnames, time, data = prepareStatistics(starttime, endtime, step, keys, measurements, translateTime(deviceResolution))
            statistics["time"] = time
            for iData in range(0, len(legendnames)):
                statistics["data"].append({"legendName": legendnames[iData], "data": data[iData]})
        deviceStatistics = json.dumps(statistics)

    except:
        logger.error("Could not read {} data from device database.".format(intervall))
    logger.info('Send \"{}\" temperature and device statistics to room {}.'.format(intervall, room))
    socketio.emit('sendStatistics', (temperatureStatistics, deviceStatistics), room=room)

def sendStatusUpdate():
    data = {}
    timenow = datetime.now()
    data["time"] = timenow.strftime('%H:%M:%S')
    data["date"] = timenow.strftime('%d.%m.%Y')

    _, devices = deviceDatabase.getLastInput()
    time, temperatures = temperatureDatabase.getLastInput()
    data["timeOfMeasurements"] = time.strftime('%H:%M:%S')
    data["dateOfMeasurements"] = time.strftime('%d.%m.%Y')

    data["temperatureSensors"] = []
    for sensorName in temperatures:
        data["temperatureSensors"].append({"name": displayNames[sensorName], "temperature": temperatures[sensorName]})

    data["devices"] = []
    for sensorName in devices:
        data["devices"].append({"name": sensorName, "state": translateDeviceState(devices[sensorName])})

    status = json.dumps(data)
    logger.info('Send status information to all clients. Status is {}'.format(status))
    socketio.emit('sendStatusUpdate', status)


# ToDo: Check if one could provde only a single route for everything
@app.route('/')
def index():
    return render_template('index.html', user_image="turtleHeader.jpg")

@app.route('/statistics')
def statistics():
    return render_template('index.html')  # Angular will handle the routing

@app.route('/settings')
def settings():
    return render_template('index.html')  # Angular will handle the routing

@app.route('/deviceStatistics')
def deviceStatistics():
    return render_template('index.html')  # Angular will handle the routing

@socketio.on('connect')
def test_connect():
    clients.append(request.sid)
    logger.info('Client {} connected. Number of clients is {}.'.format(request.sid, len(clients)))
    global thread
    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(target=background_thread)

@socketio.on('disconnect')
def disconnect():
    clients.remove(request.sid)
    logger.info('Client {} disconnected. Number of clients is {}.'.format(request.sid, len(clients)))

@socketio.on('subscribeStatistics')
def subscribeRoom(message):
    for room in statisticsCfg:
        leave_room(room)
    join_room(message["room"])
    logger.info('Removed client {} from all rooms and added to room "{}".'.format(request.sid, message["room"]))
    sendStatistics(message["room"], request.sid)

def startWebserver(webserverCfg, temperatureDB, deviceDB):
    logger.info('Starting webserver')

    global statisticsCfg
    global displayNames
    global temperatureDatabase
    global deviceDatabase
    global clients
    displayNames = webserverCfg["name"]
    temperatureDatabase = temperatureDB
    deviceDatabase = deviceDB
    statisticsCfg = webserverCfg['statistics']
    clients = []
    try:
        socketio.run(app, '0.0.0.0')
    except:
        logger.fatal("Could not start socketio")