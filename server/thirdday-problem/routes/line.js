'use stricts';

var express = require('express');
var router = express.Router();

var line = require('../controller/line');

router.get('/getData', line.getData);

module.exports = router;