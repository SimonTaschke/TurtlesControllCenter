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
    p.subscribe(**{'temperature': temperature_handler})
    p.subscribe(**{'snapshot': webcam_handler})
    config = json.loads(r.get("temperature_config"))
    for i_statistic in config["statistics"]:
        p.subscribe(**{"temperature:statistics:{}".format(i_statistic["period"]): statistics_handler})

    while len(clients) > 0:
        p.get_message()
        send_time()
        socketio.sleep(0.5)
    thread = None


def temperature_handler(message):
    message = json.loads(message['data'].decode('utf-8'))
    send_temperature(message)


def send_temperature(message, room=None):
    data = []
    for sensor in message:
        data.append({"name": sensor, "temperature": message[sensor]})
    socketio.emit('temperature', json.dumps(data), room=room)


def statistics_handler(message):
    channel = message['channel'].decode('utf-8')
    channel = (channel.split(":"))
    room = channel[2]
    data = message['data'].decode('utf-8')
    send_statistics(data, room)


def send_statistics(message, room=None):
    socketio.emit('temperature_statistic', message, room=room)


def webcam_handler(message):
    send_webcam(message['data'].decode('utf-8'))


def send_webcam(message, room=None):
    socketio.emit('webcam', message, room=room)


def send_time():
    timenow = datetime.now()
    data = json.dumps({"time": timenow.strftime('%H:%M:%S'),
            "date": timenow.strftime('%d.%m.%Y')})
    socketio.emit('time', data)


@app.route('/')
@app.route('/statistics')
@app.route('/settings')
@app.route('/deviceStatistics')
@app.route('/webcam')
def index():
    return render_template('index.html')  # Angular will handle the routing


@socketio.on('connect')
def connect():
    # Send current temperature data
    send_temperature(json.loads(r.get('temperature').decode('utf-8')), room=request.sid)

    # Send current webcam data
    send_webcam(r.get('snapshot').decode('utf-8'), room=request.sid)

    clients.append(request.sid)
    global thread
    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(target=background_thread)


@socketio.on('disconnect')
def disconnect():
    clients.remove(request.sid)


@socketio.on('leaveRoom')
def leaveRoom(message):
    leave_room(message["room"])


@socketio.on('subscribeStatistics')
def subscribeStatistics(message):
    join_room(message["room"])
    data = r.get("temperature:statistics:{}".format(message["room"])).decode('utf-8')
    send_statistics(data, room=request.sid)


def startWebserver():
    global clients
    clients = []
    socketio.run(app, '0.0.0.0')
