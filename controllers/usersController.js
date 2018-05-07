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

usersController.create = function (req,res) {

    res.render('../views/add',{'title' : 'ADD-USER'});
}
usersController.save = function (req,res){
    var usersData = new users(req.body);
    usersData.save(function (err){
       if(err){
           console.log(err);
       }else{
           console.log("user-successfully created");
           res.redirect('/users');
       }
    });
}

usersController.edit = function (req,res,next) {
    console.log(req.params.user_id);
    users.findOne({_id : req.params.user_id}).exec(function (err,user) {
        if(err){
            console.log('errors='+err);
        }else{
            console.log(user);
            res.render('../views/add',{'title' : 'ADD-USER','user' : user});
        }
    })
}
module.exports = usersController;