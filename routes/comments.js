var express = require('express');
var router = express.Router();
const commentsCtrl = require('../controllers/comments');

router.post('/:id', isLoggedIn, commentsCtrl.create);
router.delete('/:id', isLoggedIn, commentsCtrl.delete);

// this is to check if user is logged in
function isLoggedIn(req, res, next) {
    if ( req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
}


module.exports = router;