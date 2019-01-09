'use stricts';

var express = require('express');
var router = express.Router();

var temperature = require('../controller/temperature');

router.post('/receiveData', temperature.recvTemp);

router.get('/showData', temperature.showAllTemp);
router.post('/addData', temperature.addTemp);
router.put('/editData/:teamID', temperature.editTemp);
router.delete('/deleteData/:teamID', temperature.delTemp);

module.exports = router;