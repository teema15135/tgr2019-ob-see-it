'use stricts';

var express = require('express');
var router = express.Router();

var sensor = require('../controller/sensor');

router.post('/receiveData', sensor.recvSensor);

router.get('/showData', sensor.showAllSensor);
router.post('/addData', sensor.addSensor);
router.put('/editData/:id', sensor.editSensor);
router.delete('/deleteData/:id', sensor.delSensor);

module.exports = router;