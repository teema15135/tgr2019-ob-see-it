'use stricts';

var mongoose = require('mongoose');
var Sensor = mongoose.model('SensorData');

exports.getData = function(req, res) {
    var ago = Number(new Date()) - 3600000;
    Sensor.find({
        timestamp: {
            $gt: ago
        }
    }, function(err, docs) {
        if(err)
            res.send(err);
        if(docs[0] == null) {
            res.json({ message: "no data"});
        } else {
            var result = {
                temperature: docs[docs.length-1].temperature,
                humidity: docs[docs.length-1].humidity,
                pin: 0,
                pout: 0
            }
            docs.forEach(element => {
                result.pin += element.pin;
                result.pout += element.pout;
            });
            res.json(result);
        }
    });
}
