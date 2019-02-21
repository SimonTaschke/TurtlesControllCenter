import redis
import random
import json
import time
from sensor.ds20b18 import ds20b18

r = redis.Redis()


def get_temperature(sensors, virtual_sensor, emulate):

    i = 0
    temperature = {}

    ## Read Sensordata
    if emulate is True:
        for i_sensor in sensors:
            # Emulate Temperature
            temperature[i_sensor["name"]] = round(i * 5 + random.randint(0, 4) + random.uniform(0.0, 1.0), 1)
            i += 1
    else:
        for i_sensor in sensors:
            temperature[i_sensor["name"]] = round(i_sensor.getTemperatur(), 1)

    for i_virtual_sensor in virtual_sensor:
        t = 0.0
        for i_sensor in i_virtual_sensor["cummulate_sensors"]:
            t += temperature[i_sensor]
        temperature[i_virtual_sensor["name"]] = round(t/len(i_virtual_sensor["cummulate_sensors"]), 1)

    r.publish('temperature', json.dumps(temperature))
    r.set('temperature', json.dumps(temperature))


def main():
    config = json.loads(r.get("temperature_config"))

    while True:
        start_time = time.time()
        get_temperature(config["sensor"], config["virtual_sensor"], config["emulate_sensors"])
        delta_time = (start_time + config["measurement_intervall"]) - time.time()
        time.sleep(delta_time)
