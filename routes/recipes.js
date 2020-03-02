const express = require('express');
const router = express.Router();
const passport = require('passport');
const recipesCtrl = require('../controllers/recipes')

router.get('/', recipesCtrl.index);

module.exports = router;