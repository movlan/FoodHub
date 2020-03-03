const User = require('../models/user');
const Recipe = require('../models/recipe');

module.exports = {
    show
};

function show(req,res) {
    if (req.user) {
        Recipe.find({ author: req.user._id })
        .populate('author', 'name')
        .exec(function(err, recipes) {
            console.log(recipes)
            res.render('users/show', {title: `Your Recipes`, recipes, user: req.user});
        })
    } else {
        res.redirect('recipes')
    }
}