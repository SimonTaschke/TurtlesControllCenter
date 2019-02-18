import redis
import datetime
import time
import cv2


def webcam_provider():

    r = redis.Redis()
    while True:
        # Take image
        cap = cv2.VideoCapture(0)
        ret, frame = cap.read()
        cap.release()
        datetime_object = datetime.datetime.fromtimestamp(time.time())
        image_name = 'static/img/webcam/' + datetime_object.strftime("%Y%m%d_%H%M%S") + '.jpg'
        cv2.imwrite("web/" + image_name, frame)
        r.publish('snapshot', image_name)
        r.set('snapshot', image_name)
        time.sleep(5)
