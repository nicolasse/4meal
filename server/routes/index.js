import express from 'express'
import passport from 'passport'
import RecipeController from '../controllers/recipe.controller'
import AuthController from '../controllers/auth.controller'
const router = express.Router()


router.get('/meals', RecipeController.getMealByIngredients)
router.get('/meals/:id', RecipeController.getById)
router.post('/meals', AuthController.ensureAuthenticated, RecipeController.newRecipe)
router.get('/ingredients', RecipeController.getAllIngredients)

router.get('/auth/facebook/',  passport.authenticate('facebook', { scope: 'email' }))
router.get('/auth/facebook/callback', passport.authenticate('facebook', {successRedirect: '/api/meals', failureRedirect: '/login'}))


module.exports = router
