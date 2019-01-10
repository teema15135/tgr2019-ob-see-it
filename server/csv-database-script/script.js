var csv = require('fast-csv');

var obj = [];
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var mlSchema = new Schema({
    people: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: Number,
        default: Date.now
    }
});

var Data = mongoose.model('MLData', mlSchema);

function dataGoIntoTheDatabaseAnus() {
    obj.forEach((day) => {
        var arr = day.split(';');
        var date = new Date(arr[0]);
        for(var i = 1; i < 25; i++) {
            date.setHours(i);
            var data = new Data({
                people: arr[i],
                timestamp: date
            });
            data.save(function (err, docs) {
                if(err)
                    console.log(err);
            });
        }
    });
    console.log('Database Done...');
}

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Orn:123456789@localhost/integrationTGR',

function (err) {
    if (err) throw err;
    console.log('Successfully connected');
    csv
    .fromPath('sanam.csv')
    .on('data', function(data) {
        obj.push(data[0]);
    })
    .on('end', function() {
        obj.shift();
        dataGoIntoTheDatabaseAnus();
    });
});
