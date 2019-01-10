'use stricts';

var express = require('express');
var router = express.Router();

var beacon = require('../controller/beacon');

router.post('/receiveData', beacon.recvBeacon);

router.get('/showData', beacon.showAllBeacon);
router.post('/addData', beacon.addBeacon);
router.put('/editData/:id', beacon.editBeacon);
router.delete('/deleteData/:id', beacon.delBeacon);

module.exports = router;