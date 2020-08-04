const Recipes = require('../models').Recipes;

const createRecipe = (req, res)=> {
    req.body.userId = req.params.userId
    Recipes.create(req.body, (err, createdRecipe) => {
        if(err){
            return res.status(500).json(err);
        }
        res.status(200).json(createdRecipe);
    })
}

const showRecipe = (req, res) => {
    Recipes.findById(req.params.id, (err, foundRecipe) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(200).json(foundRecipe);
    })
}

const showAllRecipes = (req, res) => {
    Recipes.find({}, (err, foundAllRecipes) => {
        if(err){
            return res.status(500).json(err);
        }
        res.status(200).json(foundAllRecipes)
    })
}

const deleteRecipe = (req, res)=>{
	Recipes.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
		if(err){
			return res.status(500).json(err);
		}
		res.status(200).json(deletedRecipe);
	});
}

const editRecipe = (req, res)=>{
	Recipes.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedRecipe) => {
		if(err){
			return res.status(500).json(err);
		}
		res.status(200).json(updatedRecipe);
	});
}

const showRecipebyUser = (req, res) => {
    Recipes.find({userId: req.params.userId}, (err, foundRecipe) => {
        if(err){
            return res.status(500).json(err);
		}
		res.status(200).json(foundRecipe);
	});
        }








module.exports = {
    createRecipe,
    showRecipe,
    showAllRecipes,
    deleteRecipe,
    editRecipe,
    showRecipebyUser
}