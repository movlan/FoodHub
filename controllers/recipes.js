const Recipe = require('../models/recipe');
const User = require('../models/user');

module.exports = {
    index,
    new: newRecipe,
    create,
    show
}

function show(req, res) {
    console.log(req.user.name);
    Recipe.findById(req.params.id)
    .populate('author', 'name')
    // .populate({ 
    //     path: 'comments',
    //     populate: {
    //         path: 'author',
    //         model: 'User'
    //     }
    // })
    .exec( function(err, recipe) {
        res.render('recipes/show', {title: recipe.name, recipe, user: req.user});
    }
)};

function create(req, res) {
    req.body.author = req.user._id
    Recipe.create(req.body, function(err, recipe) {
        res.redirect(`recipes/${recipe._id}`);
    });
}

function newRecipe(req, res) {
    let user = req.user
    if (user) {
    res.render('recipes/new', { title: 'Add Recipe', user })
    } else {
        res.redirect('/')
    }
};

function index(req, res) {
    Recipe.find({}, function(err, recipes) {
        res.render('recipes/index', {title: 'All Recipes', recipes, user: req.user })
    })
};