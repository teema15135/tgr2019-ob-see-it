'use stricts';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var mlSchema = new Schema({
    people: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: Number,
        default: Date.now
    }
});

module.exports = mongoose.model('MLData', mlSchema);