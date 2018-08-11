var mongoose = require('mongoose');
var users = require('../models/Users');
const usersController = {};
// NOTE: methods must be added to the schema before compiling it with mongoose.model()
// Controller created by Amarjit Singh -- Programmer
// crud operations in nodejs,express and mongoose
// mongoose is a mongodb library.

//var users = mongoose.model("UsersModel");
/*******   Get and listing of users     **********/
usersController.list = function(req,res){
    users.find({}).exec(function(err,user){
        if(err){
            console.log("error :",err);
        }else{
            //console.log(user);
            //return false;
            res.render('../views/users',{'user' : user});
        }
    });
}
/*****   Add users page   ******/
usersController.create = function (req,res) {

    res.render('../views/add',{'title' : 'ADD-USER'});
}
/**********   Save new users     *************/
usersController.save = function (req,res){
    req.check("email" , "Invalid email address").isEmail();
    var errors = req.validationErrors();
    console.log(errors);
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
/********* Go To Edit page *************/
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
/****   update data  *****/
usersController.update = function (req,res,next) {
    var id = req.params.user_id;
    /*usersData = new users(req.body);*/
    users.update({_id:id}, req.body, {}, function(err,user){
        if(err){
            throw err;
        }
        res.redirect('/users');
    });
}
usersController.delete = function(req,res,next){
    var id = req.params.user_id;
    //console.log(id);
    users.deleteOne({_id:id},function(err,user){
        if(err){
            throw err;
        }
        res.redirect('/users');
    });
}
module.exports = usersController;