import express from 'express'
import passport from 'passport'
import RecipeController from '../controllers/recipe.controller'
import AuthController from '../controllers/auth.controller'
import IngredientController from '../controllers/ingredient.controller'
const router = express.Router()


router.get('/meals', RecipeController.getMealByIngredients)
router.get('/meals/:id', RecipeController.getById)
//router.post('/meals', AuthController.ensureAuthenticated, RecipeController.newRecipe)
router.post('/meals', RecipeController.newRecipe)

router.get('/ingredients/suggest/:ingredient', IngredientController.getIngredientsSuggest)
//router.post('/ingredients', AuthController.ensureAuthenticated, IngredientController.createIngredient)
router.post('/ingredients', IngredientController.createIngredient)

router.get('/auth/facebook/',  passport.authenticate('facebook', { scope: 'email' }))
router.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect: 'http://localhost:3000/', failureRedirect: 'http://localhost:3000/'}))


module.exports = router
