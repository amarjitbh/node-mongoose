/***  developed by Amarjit Singh  ****/
var mongoose    = require('mongoose');
var users       = require("../models/Users");
const AuthController = require('express');
const session        = require('session');
/*****  Load Login View   ******/
AuthController.login = (req,res) => {

    var message = req.flash('errors');
    res.render('../views/login', { 'errors' : message});
}

/***  Submit Login function  ***/
AuthController.loginSubmit = (req,res) => {
    //try {
        username = req.body.username;
        password = req.body.password;
        req.checkBody('username','require').notEmpty().isEmail();
        req.checkBody('password','require').notEmpty();
        errors = req.validationErrors();
        if(errors){
            console.log(errors);
            req.flash('errors',errors);
            res.redirect('login');
        }else {
            users.findOne({email: username, password: password}).exec((err, user) => {
                if (user) {
                    session.usersData = {
                        'id' : user._id,
                        'username' : user.username,
                        'email'     : user.email,
                    }
                    res.json(session.usersData);
                } else {
                    req.flash('errors', 'These credentials do not match our records.');
                    res.redirect('/login');
                }
            });
        }
   /* } catch (err) {
        throw err;
    }*/
}
module.exports = AuthController;