var mongoose    = require('mongoose');
var session     = require('session');
var users       = require("../models/Users");
var session     = require("session");
var expSession  = require("express-session");

const AuthController = {};

// This is the controller for Authentication
// Developer :- Amarjit Singh
// This code use just for testing .
// Thank you.

/***  Controller Create with arrow functions  ****/
AuthController.login = (req,res) => {
    res.render('../views/login');
}
AuthController.loginSubmit = (req,res) => {

    username = req.body.username;
    password = req.body.password;
    users.findOne({email : username,password : password}).exec( (err,user) => {
        if(err){
            throw err;
        }else{
            const userInfo = {

                user_id : user.id,
                email : user.email,
            }
            //console.log(userInfo);
            req.expSession = userInfo;
            res.json(userInfo);
            console.log(req.expSession);
        }
    });
}
module.exports = AuthController;






/*
var express     = require('express');
var mongoose    = require('mongoose');
var session     = require('session');
var users       = require("../models/Users");
var expSession  = require("express-session");
var cookieParser     = require("cookie-parser");

const AuthController = {};

// This is the controller for Authentication
// Developer :- Amarjit Singh
// This code use just for testing .
// Thank you.
/!***  Controller Create with arrow functions  ****!/
app = express();

//app.use(cookieParser());
//app.use(expSession({secret: "Shh, its a secret!"}));
AuthController.login = (req,res) => {
    res.render('../views/login');
}
AuthController.loginSubmit = (req,res,next) => {

    username = req.body.username;
    password = req.body.password;
    //console.log(username+'=='+password);return false;
    users.findOne({email : username,password : password}).exec( (err,user) => {
        if(err){
            //throw err;
        }else{
            console.log(user);return false;
        }
    });
}
module.exports = AuthController;*/
