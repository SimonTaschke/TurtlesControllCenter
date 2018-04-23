#!/usr/bin/env python
import datetime
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
    while True:
        socketio.sleep(1)
        count += 1
        time = datetime.datetime.now()
        socketio.emit('my_response',
                      {'data': time.strftime('%H:%M:%S - %d.%m.%Y'), 'count': count})


@app.route('/')
def index():
    return render_template('Messwerte.html', async_mode=socketio.async_mode)


@app.route('/Einstellungen.html')
def Einstellungen():
    return render_template('Einstellungen.html', async_mode=socketio.async_mode)


@app.route('/Messwerte.html')
def Messwerte():
    return render_template('Messwerte.html', async_mode=socketio.async_mode)


@socketio.on('my_ping')
def ping_pong():
    emit('my_pong')


@socketio.on('connect')
def test_connect():
    global thread
    with thread_lock:
        if thread is None:
            thread = socketio.start_background_task(target=background_thread)
    emit('my_response', {'data': 'Connected', 'count': 0})


@socketio.on('disconnect')
def test_disconnect():
    print('Client disconnected', request.sid)


#if __name__ == '__main__':
#        app.run(debug=True, host='0.0.0.0')
if __name__ == '__main__':
	socketio.run(app, host='0.0.0.0')
