'use strict';

var mongojs = require('mongojs');

var databaseUrl = 'obiwan:123456789@localhost/hwData';
var collections = ['temperature'];
var options = {
    "auth": {
        "user": "obiwan",
        "password": "123456789"
    }
}

var connect = mongojs(databaseUrl, collections, options);

module.exports = {
    connect: connect
};