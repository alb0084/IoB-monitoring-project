from firebase import jsonutil
from flask import Flask
from flask.helpers import flash
from flask_cors import CORS
from flask import request
from model.gasMote import runMq2 
from model.queries.queries import getDataMq2Sensor 


app = Flask(__name__)

CORS(app)

selector_=None
@app.route('/setmq2sensor', methods = ['POST'])
def setmq2sensor():
    global selector_
    if request.json == True : selector_=False
    else: selector_ = True
    #Start sensor passing Timer & Selector
    runMq2(1,selector_)
    return 'Flagged'

@app.route('/getDataMq2', methods=['GET'])
def getDataMq2():
    results = getDataMq2Sensor()
    return results
