var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/appOne');

var UsersSchema = mongoose.Schema({

     username : {type : String},
     email : {type : String},
     phone : {type : String},
     created_at : {
        type: Date,
        default: Date.now()
     },
});

UsersModel = mongoose.model('Users',UsersSchema);
module.exports = UsersModel;