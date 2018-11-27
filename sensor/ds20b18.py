class ds20b18:
    def __init__(self, serial, location, name):
        self.serial = serial
        self.location = location
        self.name = name
        
    def getTemperatur(self):
        # 1-wire Slave Datei lesen
        file = open('/sys/bus/w1/devices/' + self.serial + '/w1_slave')
        filecontent = file.read()
        file.close()
     
        # Temperaturwerte auslesen und konvertieren
        stringvalue = filecontent.split("\n")[1].split(" ")[9]
        return float(stringvalue[2:]) / 1000

if __name__ == "__main__":
    # Example Code
    ds20b18ID = "28-0517a228efff"
    temp1 = ds20b18("28-0517a228efff", "Inside1")
    for iRun in range(10):
        print("Measurment: " + str(iRun + 1))
        print("Temperatur:\t" + temp1.getTemperatur())
        print("Location:\t" + temp1.location)
        print("\n")