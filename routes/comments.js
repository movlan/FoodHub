var express = require('express');
var router = express.Router();
const passport = require('passport');
const commentsCtrl = require('../controllers/comments');

router.post('/recipes/:id/comments', commentsCtrl.create);

module.exports = router;