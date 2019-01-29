import mongoose from 'mongoose'

mongoose.Promise = global.Promise

const IngredientModel = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  img_url: {
    type: String,
    required: true,
  }


})

module.exports = mongoose.model('Ingredients', IngredientModel)
