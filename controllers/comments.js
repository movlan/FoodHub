const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    create,
    update,
    delete: deleteComment
}

function deleteComment(req, res) {
    Recipe.findOneAndDelete({comments: req.params.id}, function(err, comment) {
        res.redirect('/recipes');
    });
}

function update(req, res) {
    Recipe.findOneAndUpdate({comments: req.params.id}, req.body, {new: true}, function(err, comment) {
        console.log(comment)
        res.redirect('/recipes');
    });
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