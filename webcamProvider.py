import redis
import datetime
import time
import cv2
import glob
import json
import os

def webcam_provider():
    r = redis.Redis()
    config = json.loads(r.get("webcam_config"))
    image_interval = config["image_interval"]

    while True:
        start_time = time.time()
        # Take image
        cap = cv2.VideoCapture(0)
        ret, frame = cap.read()
        cap.release()
        datetime_object = datetime.datetime.fromtimestamp(time.time())
        image_name = 'static/img/webcam/' + datetime_object.strftime("%Y%m%d_%H%M%S") + '.jpg'
        cv2.imwrite("web/" + image_name, frame)
        r.publish('snapshot', image_name)
        r.set('snapshot', image_name)

        image_list = glob.glob("picture*.jpg")
        sorted_images = sorted(image_list, key=os.path.getmtime)

        pause_time = (start_time + image_interval) - time.time()
        if pause_time > 0:
            time.sleep(pause_time)
