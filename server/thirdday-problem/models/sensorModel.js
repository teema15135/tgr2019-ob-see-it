'use stricts';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sensorSchema = new Schema({
    temperature: {
        type: Number,
        required: 'Must have temperature'
    },
    humidity: {
        type: Number,
        required: 'Must have humidity'
    },
    pin: {
        type: Number,
        required: 'Must have people in'
    },
    pout: {
        type: Number,
        required: 'Must have people out'
    },
    timestamp: {
        type: Number,
        default: Date.now
    }  
});

module.exports = mongoose.model('SensorData', sensorSchema);