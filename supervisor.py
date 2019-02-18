import redis
import multiprocessing
import roundRobinHandler
import temperatureProvider
import web.app as app
import webcamProvider

r = redis.Redis()

filename = "temperature_config.json"
config = open(filename).read()

r.set("temperature_config", config)

p1 = multiprocessing.Process(target=roundRobinHandler.main)
p2 = multiprocessing.Process(target=temperatureProvider.main)
p3 = multiprocessing.Process(target=app.startWebserver)
p4 = multiprocessing.Process(target=webcamProvider.webcam_provider)

# Starting threads...
p1.start()
p2.start()
p3.start()
p4.start()