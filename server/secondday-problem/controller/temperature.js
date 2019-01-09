'use stricts';

var mongojs = require('../db');
var db = mongojs.connect;

exports.recvTemp = function(req, res) {
    console.log(req.body);
    res.send('receive temp');
}

exports.showAllTemp = function(req, res) {
    db.temperature.find(function (err, docs) {
        console.log(docs);
        res.send(docs);
    });
}

exports.addTemp = function(req, res) {
    var json = req.body;
    db.temperature.insert(json, function(err, docs) {
        console.log(docs);
        res.send(docs);
    });
}

exports.editTemp = function(req, res) {
    var id = parseInt(req.params.teamID);

    db.temperature.findAndModify({
        query: {
            teamID: id
        },
        update: {
            $set: req.body
        },
        new: true
    }, function(err, docs) {
        console.log(docs);
        res.send(docs);
    })
}

exports.delTemp = function(req, res) {
    var id = parseInt(req.params.teamID);

    db.temperature.remove({teamID: id}, function(err, docs) {
        console.log(docs);
        res.send(docs);
    });
}