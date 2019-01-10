var express = require('express'),
    app = express(),
    port = process.env.PORT || 8065,
    mongoose = require('mongoose'),
    Sensor = require('./models/sensorModel'),
    Beacon = require('./models/beaconModel'),
    ML = require('./models/mlModel'),
    bodyParser = require('body-parser');

var schedule = require('./server_schedule');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Orn:123456789@localhost/integrationTGR',
function (err) {
    if (err) throw err;
    console.log('Successfully connected');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require('./routes/index');
routes(app);

app.listen(port);
console.log('Listening...');

schedule();
