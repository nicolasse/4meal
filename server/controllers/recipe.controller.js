import Recipes from '../models/recipe.model'
import mongoose from 'mongoose'

function ObjectId(id){
  return mongoose.Types.ObjectId(id)
}

exports.getMealByIngredients = ( req, res ) => {
  let arrayIngredients, query
  if( req.query.ingredients ){
    let arrayIngredients = req.query.ingredients.split(',')
    let filteredQuery = arrayIngredients.filter( ingredient => {
      return ingredient != ''
    } )
    let objefy = filteredQuery.map( ing  => {
      try{
        return ObjectId(ing)
      }catch(error) {
        return null
      }
    })
    arrayIngredients.pop()
    query = { 'ingredients.nameId': { $all: objefy }  }
    Recipes
      .find( query )
      .populate( 'ingredients.nameId' )
      .sort({'ingredients.length': -1})
      .lean()
      .then( meals  => {
        res.status(200).json( meals )
      })
      .catch( error => {
        res.status(404).json( error.message )
      } )
  }
  else
    res.status(200).json( [] )
    
}

exports.getById = ( req, res ) => {
  Recipes.findById( req.params.id )
    .populate('ingredients.nameId')
    .lean()
    .then( meal => {
      res.status(200).json( meal )
    } )
    .catch ( err => {
      res.status(404).end()
    } )
}

exports.newRecipe = ( req, res ) => {
  let newRecipe = new Recipes( req.body )
  let user = {
    name: req.user.name,
    photoURL: req.user.picture,
    user_id: req.user.user_id
 
  }
  newRecipe.created_by= user
  newRecipe.save()
    .then( recipe => {
      res.status(201).end()
    })
    .catch( error => {
      res.status(500).json({ error: error.message })
  } )
}
