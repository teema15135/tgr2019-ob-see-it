var addMLData = require('./controller/beacon').addToML;
var mongoose = require('mongoose');
var ML = require('./models/mlModel');

var interval = {
    hour: 1,
    minute: 0,
    second: 0
}
var mil = ( (interval.hour * 60 * 60 ) + ( interval.minute * 60 ) + (interval.second) ) * 1000;

module.exports = function() {
    setInterval(function() {
        addMLData();
    }, mil)
}
