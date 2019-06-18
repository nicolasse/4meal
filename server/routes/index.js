import express from 'express'
import RecipeController from '../controllers/recipe.controller'
import AuthController from '../auth'
import IngredientController from '../controllers/ingredient.controller'
const router = express.Router()


router.get('/meals', RecipeController.getMealByIngredients)
router.get('/meals/:id', RecipeController.getById)
//router.post('/meals', AuthController.ensureAuthenticated, RecipeController.newRecipe)
router.post('/meals', AuthController.isAuthenticated, RecipeController.newRecipe)

router.get('/ingredients/suggest/:ingredient', IngredientController.getIngredientsSuggest)
//router.post('/ingredients', AuthController.ensureAuthenticated, IngredientController.createIngredient)
router.post('/ingredients', IngredientController.createIngredient)

//router.get('/auth', AuthController.isAutenticated)
//router.get('/auth/facebook/',  passport.authenticate('facebook', { scope: 'email' }))
//router.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect: 'http://localhost:3000/', failureRedirect: 'http://localhost:3000/'}))


module.exports = router
