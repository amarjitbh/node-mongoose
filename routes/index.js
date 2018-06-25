var express = require('express');
var router = express.Router();
var expSession = require("express-session");

/*****   Authentications Systems ******/
var AuthController = require('../controllers/AuthController');
/* GET home page. */
/*router.get('/', function(req, res, next) {
  res.render('index', { title: 'Amarjit Singh' });
});*/
/*****  Login-view  ****/

var Authentication = (req,res,next) => {
  console.log(req.expSession);
};

router.get('/login', AuthController.login);
/*****  Login-submit   *****/
router.post('/login', AuthController.loginSubmit);

module.exports = router;
