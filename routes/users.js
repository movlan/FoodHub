var express = require('express');
var router = express.Router();
const passport = require('passport');
const userCtrl = require('../controllers/users');


// router.get('/', userCtrl.index)
router.get('/:id', userCtrl.show);

module.exports = router;
