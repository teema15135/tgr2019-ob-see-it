var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
var bodyParser = require('body-parser');

app.use(bodyParser.json());

var routes = require('./api/routes');
routes(app);

app.listen(port);
console.log('Listening at port ' + port);