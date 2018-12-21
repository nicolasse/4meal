import mongoose from 'mongoose'

mongoose.Promise = global.Promise;

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  category: {
    type: String,
    enum: ['snack', 'complex']
  },
  description: {
    type: String,
  },
  ingredients: [
    {
      name: String,
      amount: Number,
      measure: {
        type: String,
        enum: ['tablespoon', 'teaspoon', 'cup', 'unity', 'half', 'quarter', 'gr', 'kg', 'to taste', 'slice'],
        default: 'unity',
      }
    }
  ],

  directions: [
    {
        step: Number,
        description: String,
    }
  ],
  likes: {
    type: Number,
    default: 0
  },
  dislikes: {
    type: Number,
    default: 0
  }

})

module.exports = mongoose.model('Recipes', RecipeSchema)


