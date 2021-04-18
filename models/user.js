//Structure of the data
var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    email: {type: String, unique: true, lowecase: true},
    pasword: String,
    username: String,
    gender: {
        type: String,
        enum: ['MALE', 'FEMALE']
    },
    phone : Number
},
    {timestamp: true}
);

module.exports = mongoose.model('User', userSchema);