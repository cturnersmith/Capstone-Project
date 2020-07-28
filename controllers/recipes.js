const Recipes = require('../models').Recipes;

const createRecipe = (req, res)=> {
    Recipe.create(req.body, (err, createdRecipe) => {
        if(err){
            return res.status(500).json(err);
        }
        res.status(200).json(createdRecipe);
    })
}

const showRecipe = (req, res) => {
    Recipe.findById(req.params.id, (err, foundRecipe) => {
        if(err) {
            return res.status(500).json(err);
        }
        res.status(200).json(foundRecipe);
    })
}

const showAllRecipes = (req, res) => {
    Recipe.find({}, (err, foundAllRecipes) => {
        if(err){
            return res.status(500).json(err);
        }
        res.status(200).json(foundAllRecipes)
    })
}

const deleteRecipe = (req, res)=>{
	Recipe.findByIdAndRemove(req.params.id, (err, deletedRecipe) => {
		if(err){
			return res.status(500).json(err);
		}
		res.status(200).json(deletedRecipe);
	});
}

const editRecipe = (req, res)=>{
	Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedRecipe) => {
		if(err){
			return res.status(500).json(err);
		}
		res.status(200).json(updatedRecipe);
	});
}






module.exports = {
    createRecipe,
    showRecipe,
    showAllRecipes,
    deleteRecipe,
    editRecipe
}