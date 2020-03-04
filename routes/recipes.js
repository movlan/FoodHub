const express = require('express');
const router = express.Router();
const passport = require('passport');
const recipesCtrl = require('../controllers/recipes')

router.get('/', recipesCtrl.index);
router.get('/new', recipesCtrl.new);
router.get('/:id', recipesCtrl.show);
router.get('/:id/edit', recipesCtrl.edit);
router.post('/', recipesCtrl.create);
router.put('/:id', recipesCtrl.update);
router.delete('/:id', recipesCtrl.delete)

module.exports = router;