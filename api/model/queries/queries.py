#example automation task 
# from threading import Timer
# def setInterval(timer, task):
#     isStop = task()
#     if not isStop:
#         Timer(timer, setInterval, [timer, task]).start()
# def hello():
#     print ("do something")
#     return False # return True if you want to stop

# setInterval(2.0, hello) # every 2 seconds, "do something" will be printed

from firebase import firebase

def getDataMq2Sensor():
    connection=firebase.FirebaseApplication('https://gas-system-monitoring-default-rtdb.firebaseio.com/', None)
    result = connection.get('gas-system-monitoring-default-rtdb/mq2sensor', None)
    return result
    
    