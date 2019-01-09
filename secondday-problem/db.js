'use strict';

var mongojs = require('mongojs');

var databaseUrl = 'mongodb://localhost/hwData';
var collections = ['temperature'];
var options = {
    auth: {
        user: "obiwan",
        password: "123456789"
    }
}

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};