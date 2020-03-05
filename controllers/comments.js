const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    create,
    delete: deleteComment
}

function deleteComment(req, res) {
    Recipe.findOne({'comments._id': req.params.id}, function(err, recipe) {
        recipe.comments.id(req.params.id).remove();
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`);
        });
    });
}

function create(req, res) {
    Recipe.findById(req.params.id, function(err, recipe) {
        recipe.comments.push(req.body);
        recipe.save(function(err) {
            res.redirect(`/recipes/${recipe._id}`);
        });
    });
}