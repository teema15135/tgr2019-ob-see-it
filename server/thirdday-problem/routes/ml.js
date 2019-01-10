'use stricts';

var express = require('express');
var router = express.Router();

var ml = require('../controller/ml');

router.get('/getData', ml.getData);
router.get('/predict', ml.predict);
router.get('/all', ml.getAllData);
router.put('/edit/:id', ml.editData)

module.exports = router;