const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    create
}

function create(req, res) {
    console.log(req.user)
    Recipe.findById(req.params.id, function(err, recipe) {
        recipe.comments.push(req.body);
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`);
        });
    });
}