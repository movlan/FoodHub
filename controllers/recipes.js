const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    index
}

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        console.log(recipes);
        res.render('recipes/index', {title: 'All Recipes', recipes, user: req.user})
    })
}