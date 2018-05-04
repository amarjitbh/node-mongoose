var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/appOne');

var usersSchema = mongoose.Schema({

    'username' : {type : String},
    'email' : {type : String},
    'phone' : {type : String},
    'created_at' : {
        type: Date,
        default: Date.now()
    },
});

module.exports = mongoose.model('UsersModel',usersSchema);