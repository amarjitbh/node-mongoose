var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var userController = require('../controllers/usersController');
var Schema = mongoose.Schema;


router.get('/', userController.list);
router.get('/create',userController.create);
router.post('/save',userController.save);
router.get('/edit/:user_id',userController.edit);
router.post('/update/:user_id',userController.update);
router.get('/delete/:user_id',userController.delete);

module.exports = router;
