'use strict';

var mongojs = require('mongojs');

var databaseUrl = 'mongodb://obiwan:123456789@localhost/hwData';
var collections = ['temperature'];
//var options = {"auth": "('obiwan','123456789')"};

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};