from firebase import firebase
from random import *
from threading import Timer


# Function that simulate sensor behavior Test
x_axis = 0
firebase = firebase.FirebaseApplication('https://gas-system-monitoring-default-rtdb.firebaseio.com/',None)
selector_gas= None
timer_=0

#Thread scheduler Sensor
def  mq2SGasSensors(timer_,task):
    isStop = task()
    if not isStop:
        Timer(timer_, mq2SGasSensors,[timer_,task]).start()

# query firebase
def taskQuerypost():
    global x_axis 
    y_axis = randrange(250,295,1)
    data = {
        'index':x_axis,
        'volt':y_axis,
    }
    global selector_gas
    firebase.post('gas-system-monitoring-default-rtdb/mq2sensor', data)
    x_axis += 1
    return selector_gas

def runMq2(timer,selector):
    global timer_
    timer_=timer
    global selector_gas
    selector_gas = selector
    mq2SGasSensors(timer_,taskQuerypost)


