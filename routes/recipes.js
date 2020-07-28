const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.post('/', ctrl.recipes.createRecipe);
router.get('/all', ctrl.recipes.showAllRecipes);
router.get('/:id', ctrl.recipes.showRecipe);
router.delete('/:id', ctrl.recipes.deleteRecipe);
router.put('/:id', ctrl.recipes.editRecipe);

module.exports = router;