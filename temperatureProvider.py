import redis
import random
import json
import time


def emulate_temperature(i):
    return round(i * 5 + random.randint(0, 4) + random.uniform(0.0, 1.0), 1)


def get_temperature(sensor_id):
    # read temperature from file
    file = open('/sys/bus/w1/devices/' + sensor_id + '/w1_slave')
    filecontent = file.read()
    file.close()
    stringvalue = filecontent.split("\n")[1].split(" ")[9]
    return round(float(stringvalue[2:]) / 1000, 1)


def main():
    r = redis.Redis()
    config = json.loads(r.get("temperature_config"))

    while True:
        start_time = time.time()
        temperature = {}
        if config["emulate_sensors"]:
            i = 0
            for sensor in config["sensor"]:
                temperature[sensor["name"]] = emulate_temperature(i)
                i += 1
        else:
            for sensor in config["sensor"]:
                temperature[sensor["name"]] = get_temperature(sensor["serial"])

        for i_virtual_sensor in config["virtual_sensor"]:
            t = 0.0
            for i_sensor in i_virtual_sensor["cummulate_sensors"]:
                t += temperature[i_sensor]
            temperature[i_virtual_sensor["name"]] = round(t / len(i_virtual_sensor["cummulate_sensors"]), 1)

        r.publish('temperature', json.dumps(temperature))
        r.set('temperature', json.dumps(temperature))

        delta_time = (start_time + config["measurement_intervall"]) - time.time()
        time.sleep(delta_time)
