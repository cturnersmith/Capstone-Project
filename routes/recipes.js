const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/:userId', ctrl.recipes.createRecipe);
router.get('/user/:userId', ctrl.recipes.showRecipebyUser);
router.get('/all', ctrl.recipes.showAllRecipes);
router.get('/:id', ctrl.recipes.showRecipe);
router.delete('/:id', ctrl.recipes.deleteRecipe);
router.put('/:id', ctrl.recipes.editRecipe);


module.exports = router;