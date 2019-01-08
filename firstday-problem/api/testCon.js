var fs = require('fs');

const dataPath = __dirname + '/' + '../data/users.json';

fs.readFile(dataPath, 'utf8', function(err, data) {
    data = JSON.parse(data);
    console.log(JSON.stringify(data['2']));
});

