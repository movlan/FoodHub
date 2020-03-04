const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    create,
    update,
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

function update(req, res) {
    Recipe.findOneAndUpdate({comments: req.params.id}, req.body, {new: true}, function(err, comment) {
        res.redirect('/recipes');
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