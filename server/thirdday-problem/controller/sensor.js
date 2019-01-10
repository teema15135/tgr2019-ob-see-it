'use stricts';

var mongoose = require('mongoose');
var Sensor = mongoose.model('SensorData');

exports.recvSensor = function (req, res) {
    console.log(req.body);
    res.send('recv');
}

exports.showAllSensor = function (req, res) {
    Sensor.find({}, function (err, docs) {
        if (err)
            res.send(err);
        res.json(docs);
    });
}

exports.addSensor = function (req, res) {
    var new_Data = new Sensor(req.body);
    new_Data.save(function (err, docs) {
        if (err)
            res.send(err);
        res.json(docs);
    });
}

exports.editSensor = function (req, res) {
    Sensor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, docs) {
        if (err)
            res.send(err);
        res.json(docs);
    });
}

exports.delSensor = function (req, res) {
    Sensor.remove({
        _id: req.params.id
    }, function (err, docs) {
        if (err)
            res.send(err);
        res.json({ message: 'Data successfully deleted' });
    });
}