'use stricts';

var tempRoutes = require('./temp');

module.exports = function(app) {
    app.use('/temp', tempRoutes);
}