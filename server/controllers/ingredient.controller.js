import Ingredient from '../models/ingredient.model'

exports.getIngredientsSuggest = ( req, res ) => {
  let regIngredient  = req.params.ingredient
  Ingredient.find({'name': { $regex: regIngredient, $options: 'i' }})
    .lean()
    .then( result => {
      let response = result.length === 0 ? [{ name: '', img_url: '' }] : result
      res.status(200).json( response )
    } )
    .catch( error => {
      res.status(500).json(error.message)
    } )
}

exports.createIngredient = ( req, res ) => {
  let newIngredient = new Ingredient()
  console.log(req.body)
  newIngredient.name = req.body.name
  newIngredient.img_url = req.body.img_url
  newIngredient.save()
    .then( result => {
      res.status(200).json( result )
    } )
    .catch( error => {
      res.status(500).json(error.message)
    } )
}
