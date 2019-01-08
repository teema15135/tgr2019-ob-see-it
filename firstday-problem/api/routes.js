'use strict';

module.exports = function(app) {
    var user = require('./controller');
    
    app.get('/listUsers', user.listAllUsers);
    app.get('/showbyID/:id', user.showUser);
    app.post('/addUser', user.addUser);
    app.post('/addMultiUser', user.addMultiUser);
    app.delete('/deleteUser/:id/', user.delUser);

};
