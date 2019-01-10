'use stricts';

var mongoose = require('mongoose');
var Sensor = mongoose.model('SensorData');

exports.recvSensor = function (req, res) {
    var payload = req.body.DevEUI_uplink.payload_hex;
    console.log('receive payload: ' + payload);
    let obj = {
        pin: Number('0x' + payload.substr(4, 4)),
        pout: Number('0x' + payload.substr(12, 4)),
        temperature: Number('0x' + payload.substr(20, 4))/10.0,
        humidity: Number('0x' + payload.substr(28, 2))/2
    }
    var new_Data = new Sensor(obj);
    new_Data.save(function (err, docs) {
        if (err) console.log(err);
        console.log('receive and record the sensor data...');
    });
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