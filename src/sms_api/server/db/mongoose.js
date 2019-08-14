var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

var options = {
    user: process.env.USERNAME,
    pass: process.env.PASSWORD
}

mongoose.connect(process.env.MONGODB_URI,options);

mongoose.exports = {
    mongoose
}