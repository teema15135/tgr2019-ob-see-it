'use strict';

module.exports = function(app) {
    var user = require('./controller');
    var line = require('./lineController');
    
    app.get('/listUsers', user.listAllUsers);
    app.get('/showbyID/:id', user.showUser);
    app.post('/addUser', user.addUser);
    app.post('/addMultiUser', user.addMultiUser);
    app.delete('/deleteUser/:id/', user.delUser);

    app.get('/webhook', line.pushBlock);
    app.post('/webhook', line.replyBlock);
};
