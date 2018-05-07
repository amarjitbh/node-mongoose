var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userController = require('../controllers/usersController');
var Schema = mongoose.Schema;
router.get('/', userController.list);
router.get('/add',userController.add);
module.exports = router;
