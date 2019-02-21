import redis
import multiprocessing
import roundRobinHandler
import temperatureProvider
import web.app as app
import webcamProvider
import json

r = redis.Redis()

# temperature config
filename = "temperature_config.json"
config = json.loads(open(filename).read())
# create sensor dictionary
dictionary = {}
for sensor in config["sensor"]:
    dictionary[sensor["name"]] = sensor["display_name"]
for sensor in config["virtual_sensor"]:
    dictionary[sensor["name"]] = sensor["display_name"]
config["sensor_dictionary"] = dictionary
r.set("temperature_config", json.dumps(config))

# webcam config
filename = "webcam_config.json"
config = open(filename).read()
r.set("webcam_config", config)

p1 = multiprocessing.Process(target=roundRobinHandler.main)
p2 = multiprocessing.Process(target=temperatureProvider.main)
p3 = multiprocessing.Process(target=app.startWebserver)
p4 = multiprocessing.Process(target=webcamProvider.webcam_provider)

# Starting threads...
p1.start()
p2.start()
p3.start()
p4.start()