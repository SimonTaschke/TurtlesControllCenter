#!/usr/bin/env python
from datetime import datetime
import json
from threading import Lock
from flask import Flask, render_template, session, request, send_file
from flask_socketio import SocketIO, emit, join_room, leave_room, rooms, close_room, disconnect
import redis

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on installed packages.
async_mode = None

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode=async_mode)
thread = None
thread_lock = Lock()
r = redis.Redis()


def background_thread():
    global thread
    p = r.pubsub()
    p.subscribe(**{'temperature': send_temperature})
    p.subscribe(**{'snapshot': send_webcam})
    config = json.loads(r.get("temperature_config"))
    for i_statistic in config["statistics"]:
        p.subscribe(**{"temperature:statistics:{}".format(i_statistic["period"]): send_statistics})

    while len(clients) > 0:
        p.get_message()
        send_time()
        socketio.sleep(0.5)
    thread = None


def send_statistics(message):
    channel = message['channel'].decode('utf-8')
    channel = (channel.split(":"))
    room = channel[2]
    socketio.emit('temperature_statistic', message['data'].decode('utf-8'), room=room)


def send_time():
    timenow = datetime.now()
    data = json.dumps({"time": timenow.strftime('%H:%M:%S'),
            "date": timenow.strftime('%d.%m.%Y')})
    socketio.emit('time', data)


def send_temperature(message):
    message = json.loads(message['data'].decode('utf-8'))
    data = []
    for sensor in message:
        data.append({"name": sensor, "temperature": message[sensor]})
    socketio.emit('temperature', json.dumps(data))


def send_webcam(message):
    socketio.emit('webcam', message['data'].decode('utf-8'))


# ToDo: Check if one could provide only a single route for everything
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


@app.route('/webcam')
def webcam():
    return render_template('index.html')  # Angular will handle the routing


@socketio.on('connect')
def connect():
    # Send current temperature data
    message = r.get('temperature')
    message = json.loads(message.decode('utf-8'))
    data = []
    config = json.loads(r.get("temperature_config").decode('utf-8'))
    for sensor in message:
        data.append({"name": sensor, "temperature": message[sensor]})
    socketio.emit('temperature', json.dumps(data), room=request.sid)

    # Send current webcam data
    socketio.emit('webcam',  r.get('snapshot').decode('utf-8'), room=request.sid)

    clients.append(request.sid)
    global thread
    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(target=background_thread)


@socketio.on('disconnect')
def disconnect():
    clients.remove(request.sid)


@socketio.on('subscribeStatistics')
def subscribeRoom(message):
    config = json.loads(r.get("temperature_config"))
    for i_statistic in config["statistics"]:
        leave_room(i_statistic["period"])
    join_room(message["room"])
    data = r.get("temperature:statistics:{}".format(message["room"]))
    socketio.emit('temperature_statistic', data.decode('utf-8'), room=request.sid)

def startWebserver():
    global clients
    clients = []
    socketio.run(app, '0.0.0.0')