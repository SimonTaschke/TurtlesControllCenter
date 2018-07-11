#!/usr/bin/env python
import datetime
import random
import json
from threading import Lock
from flask import Flask, render_template, session, request
from flask_socketio import SocketIO, emit, join_room, leave_room, \
    close_room, rooms, disconnect

# Set this variable to "threading", "eventlet" or "gevent" to test the
# different async modes, or leave it set to None for the application to choose
# the best option based on installed packages.
async_mode = None

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app, async_mode=async_mode)
thread = None
thread_lock = Lock()

def background_thread():
    """Example of how to send server generated events to clients."""
    count = 0
    dayStorage = []
    while True:
        socketio.sleep(1)
        count+= 1
        time = datetime.datetime.now()
        print(calendar.timegm(time))
        tempInside1 = random.randint(1, 10)
        tempInside2 = random.randint(1, 10)
        tempOutside = random.randint(1, 10)
        data = {}
        data["time"] = time.strftime('%H:%M:%S')
        data["date"] = time.strftime('%d.%m.%Y')
        data["tempInside1"] = tempInside1
        data["tempInside2"] = tempInside2
        data["tempOutside"] = tempOutside
        data["count"] = count
        dayStorage.append(data)
        if random.randint(0, 1):
            data["light"] = "on"
        else:
            data["light"] = "off"
        jsonString = json.dumps(data)
        socketio.emit('my_response', jsonString)
        print(dayStorage)


@app.route('/')
def index():
    return render_template('Messwerte.html', async_mode=socketio.async_mode)


@app.route('/Einstellungen.html')
def Einstellungen():
    return render_template('Einstellungen.html', async_mode=socketio.async_mode)


@app.route('/Messwerte.html')
def Messwerte():
    return render_template('Messwerte.html', async_mode=socketio.async_mode)


@socketio.on('connect')
def test_connect():
    global thread
    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(target=background_thread)

if __name__ == '__main__':
	socketio.run(app, host='0.0.0.0')
