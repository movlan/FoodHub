var express = require('express');
var router = express.Router();
const passport = require('passport');
const commentsCtrl = require('../controllers/comments');

router.post('/recipes/:id/comments', commentsCtrl.create);
router.put('/:id', commentsCtrl.update);
router.delete('/:id', commentsCtrl.delete)

module.exports = router;