var mongoose = require('mongoose');
//var users = mongoose.model('UsersModel');
var users = require('../models/users');
const usersController = {};

usersController.list = function(req,res){

    users.find({}).exec(function(err,user){
        if(err){
            console.log("error :",err);
        }else{
            console.log(user);
            res.render('../views/users',{'user' : user});
        }
    });
}
module.exports = usersController;