import mongoose from 'mongoose'

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true)

const RecipeSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  img_url: {
    type: String,
    required: true
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
      nameId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ingredients' },
      amount: Number,
      measure: {
        type: String,
        enum: ['tablespoon', 'teaspoon', 'cup', 'unity', 'half', 'quarter', 'gr', 'kg', 'to taste', 'slice'],
        default: 'unity',
      }
    }
  ],

  directions: [ String ],
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


