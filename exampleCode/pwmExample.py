import RPi.GPIO as GPIO
import time

ledPin = 11

GPIO.setmode(GPIO.BOARD)
GPIO.setup(ledPin, GPIO.OUT)
ledPinPWM = GPIO.PWM(ledPin, 50)
ledPinPWM.start(0)

for k in range(0,2):
	for dc in range(0, 101, 5):
		ledPinPWM.ChangeDutyCycle(dc)
		time.sleep(0.1)
	for dc in range(100, -1, -5):
		ledPinPWM.ChangeDutyCycle(dc)
                time.sleep(0.1)


GPIO.cleanup()
