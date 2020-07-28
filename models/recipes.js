const mongoose = require('mongoose');

const recipesSchema = mongoose.Schema({
    userId: { //Referenced 
		type: mongoose.Schema.ObjectId,
		ref: 'User'
	},
    category: String,
    recipeName: String,
    ingredients: String,
    cookTime: String,
    rating: String,
    image: String

});

const Recipe = mongoose.model('Recipe', recipesSchema);

module.exports = Recipe;