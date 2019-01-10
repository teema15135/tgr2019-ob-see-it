'use stricts';

var sensorRoutes = require('./sensor');
var beaconRoutes = require('./beacon');
var mlRoutes = require('./ml');
var lineRoutes = require('./line');

module.exports = function(app) {
    app.use('/sensor', sensorRoutes);
    app.use('/beacon', beaconRoutes);
    app.use('/ml', mlRoutes);
    app.use('/line', lineRoutes);
}