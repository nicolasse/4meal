import Recipes from '../models/recipe.model'

exports.getIngredients = ( req,res ) => {
  let regIngredient = req.params.ingredient
  Recipes
    //.find({'ingredients.name': { $regex: regIngredient, $options: 'i' }})
    //.select('ingredients.name')
    //.lean()
    .aggregate([ 
      {'$match': { "ingredients.name": /peas/ }},
      {'$group': { "_id": '$ingredients' }}
    ])
    .then( result => {
      res.status(200).json( result[0].ingredients )
    } )
    .catch( error => {
      console.log(error.message)
      res.status(500).json(error.message)
    } )
}

exports.getMealByIngredients = ( req, res ) => {
  let arrayIngredients, query
  if( req.query.ingredients ){
    let arrayIngredients = req.query.ingredients.split(',')
    query = { 'ingredients.nameId': ''+ arrayIngredients[0] +'' }
  }
  else
    query = {}
    
  Recipes
    .find( query )
    .lean()
    .then( meals  => {
      res.status(200).json( meals )
    })
    .catch( error => {
      res.status(404).json( error.message )
    } )
}

exports.getById = ( req, res ) => {
  Recipes.findById( req.params.id )
    .lean()
    .then( meal => {
      res.status(200).json( meal )
    } )
    .catch ( err => {
      res.status(404).end()
    } )
}

exports.newRecipe = ( req, res ) => {
  let newRecipe = new Recipes()
  newRecipe.name= req.body.name
  newRecipe.description = req.body.description
  newRecipe.ingredients = req.body.ingredients
  newRecipe.directions = req.body.directions
  newRecipe.img_url = req.body.img_url
  newRecipe.save()
    .then( recipe => {
      res.status(201).end()
    })
    .catch( error => {
      res.status(500).json({ error: error.message })
  } )
}
