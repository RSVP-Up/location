const mongoose = require('mongoose');
const mongooseUri = 'mongodb://localhost/location';

mongoose.connect(mongooseUri, { useNewUrlParser: true });

var db = mongose.conection;

db.on('error', console.error.bind(console, 'connection error wth mongoose'));

db.once('open', function () {
    console.log('mongoose is running')
});
​

module.exports = db;