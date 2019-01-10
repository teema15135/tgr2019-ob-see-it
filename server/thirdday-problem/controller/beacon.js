'use stricts';

var mongoose = require('mongoose');
var Beacon = mongoose.model('BeaconData');
var ML = mongoose.model('MLData');

exports.recvBeacon = function (req, res) {
    var new_Data = new Beacon(req.body);
    new_Data.save(function (err, docs) {
        if(err)
            console.log(err);
        console.log('receive ' + req.body.status + ' message from')
    });
    console.log(req.body);
    res.send('recv');
}

exports.showAllBeacon = function (req, res) {
    Beacon.find({}, function (err, docs) {
        if (err)
            res.send(err);
        res.json(docs);
    });
}

exports.addBeacon = function (req, res) {
    var new_Data = new Beacon(req.body);
    new_Data.save(function (err, docs) {
        if (err)
            res.send(err);
        res.json(docs);
    });
}

exports.editBeacon = function (req, res) {
    Beacon.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, function (err, docs) {
        if (err)
            res.send(err);
        res.json(docs);
    });
}

exports.delBeacon = function (req, res) {
    Beacon.remove({
        _id: req.params.id
    }, function (err, docs) {
        if (err)
            res.send(err);
        res.json({ message: 'Data successfully deleted' });
    });
}

exports.addToML = function () {
    Beacon.find({
        "timestamp": {
            $gt: Number(new Date()) - 36000000
        }
    }, function(err, docs) {
        var people = 0;
        docs.forEach(function(doc) {
            if (doc.status == 'enter') people++;
            else people--;
        });
        var new_ML = new ML({
            people: people
        });
        new_ML.save(function(err, docs) {
            if(err) console.log(err);
            console.log('data recorded');
        });
    });
}