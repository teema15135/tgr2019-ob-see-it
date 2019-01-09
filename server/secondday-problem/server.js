var express = require('express');
var app = express();

var port = 8065;

var router = require('./routes/index');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

router(app);

app.listen(port, function() {
    console.log("Listening...");
});