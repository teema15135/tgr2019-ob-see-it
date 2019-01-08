'use strict';

var fs = require('fs');

const dataPath = __dirname + '/' + '../data/users.json';

exports.listAllUsers = function(req, res) {
    fs.readFile(dataPath, 'utf8', function(err, data) {
        res.json(JSON.parse(data));
    });
}

exports.showUser = function(req, res) {
    fs.readFile(dataPath, 'utf8', function(err, data) {
        data = JSON.parse(data);
        res.json(data['user' + req.params.id]);
    });
}

exports.addUser = function(req, res) {
    fs.readFile(dataPath, 'utf8', function(err, data) {
        data = JSON.parse(data);
        data['user5'] = req.body;
        res.json(data);
    });
}

exports.addMultiUser = function(req, res) {
    fs.readFile(dataPath, 'utf8', function(err, data) {
        data = JSON.parse(data);
        for(var i = 0; i < req.body.users.length; i++) {
            var curUser = 5 + i;
            data['user' + curUser] = req.body.users[i];
            data['user' + curUser].id = curUser;
        }
        res.json(data);
    });
}

exports.delUser = function(req, res) {
    fs.readFile(dataPath, 'utf8', function(err, data) {
        data = JSON.parse(data);
        delete data['user' + req.params.id];
        res.json(data);
    });
}