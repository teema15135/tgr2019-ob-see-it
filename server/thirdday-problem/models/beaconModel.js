'use stricts';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var beaconSchema = new Schema({
    timestamp: {
        type: Number,
        default: Date.now
    },
    status: {
        type: String,
        required: 'must have status'
    }
});

module.exports = mongoose.model('BeaconData' , beaconSchema);