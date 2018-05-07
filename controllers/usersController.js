var mongoose = require('mongoose');
var users = require('../models/Users');
const usersController = {};
// NOTE: methods must be added to the schema before compiling it with mongoose.model()


//var users = mongoose.model("UsersModel");

usersController.list = function(req,res){
    users.find({}).exec(function(err,user){
        if(err){
            console.log("error :",err);
        }else{
            console.log(user);
            //return false;
            res.render('../views/users',{'user' : user});
        }
    });
}

usersController.add = function (req,res) {

    console.log('add-users');
}
module.exports = usersController;