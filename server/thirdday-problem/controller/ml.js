'use stricts';

var mongoose = require('mongoose');
var ML = mongoose.model('MLData');

exports.getData = function (req, res) {
    console.log(req.query.hours);
    ML
        .find({})
        .sort({ timestamp: -1 })
        .limit(Number(req.query.hours))
        .exec(function (err, docs) {
            var result = [];
            docs = docs.reverse()
            docs.forEach((doc) => {
                result.push(doc.people);
            });
            res.json({ result: result });
        });
}

exports.predict = function (req, res) {
    console.log('predict');
    res.send('something predicted'); /********************************************************/
}

exports.editData = function (req, res) {
    ML.update({ _id: req.params.id }, req.body, { new: true }, function (err, docs) {
        res.json(docs);
    });
}

exports.getAllData = function (req, res) {
    ML.find({}, function (err, docs) {
        if (err)
            res.send(err);
        res.json(docs);
    });
}