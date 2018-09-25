var mongoose = require('mongoose');

var Employee = new mongoose.Schema({
    firstName:String,
    lastName:String,
    email:String,
    phone:String,
    jobtype:String

  
});

module.exports = mongoose.model('Employee', Employee);

