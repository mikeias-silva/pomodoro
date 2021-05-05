const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/pomodoro', {useMongoCliente: true});

//mongoose.Promise = global.Promisse;
mongoose.Promise = Promise;
module.exports = mongoose;