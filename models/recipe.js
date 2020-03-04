const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    name: String,
    comment: {
        type: String,
        required: true
    }
});

const recipeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    youTubeLink: {
        type: String,
        required: true
    },
    directions: {
        type: String,
        required: true
    },
    ingredients: {
        type: String,
        required: true
    },
    author: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    comments: [commentSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Recipe', recipeSchema);