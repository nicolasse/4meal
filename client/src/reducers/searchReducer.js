import {
  FETCH_RECIPES_STARTED,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_FAILURE,
  FETCH_RECIPE_STARTED,
  FETCH_RECIPE_SUCCESS,
  FETCH_RECIPE_FAILURE,
  FETCH_INGREDIENT_STARTED,
  FETCH_INGREDIENT_SUCCESS,
  FETCH_INGREDIENT_FAILURE,
  CLEAR_SUGGESTIONS,
  HOVER_INGREDIENT,
} from '../actions/searchActions'

const INITIAL_STATE = {
  error: null,
  loading: false,
  recipe: {},
  loadingRecipe: false,
  recipes: [],
  ingredients: []
}

const searchReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type){
    case FETCH_RECIPES_STARTED:
      return {
        ...state,
        loading: true,
      }
    case FETCH_RECIPES_SUCCESS:
      return {
        ...state,
        loading: false,
        recipes: action.payload,
      }
    case FETCH_RECIPES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case FETCH_RECIPE_STARTED:
      return {
        ...state,
        loadingRecipe: true,
      }
    case FETCH_RECIPE_SUCCESS:
      return {
        ...state,
        loadingRecipe: false,
        recipe: action.payload
      }
    case FETCH_RECIPE_FAILURE:
      return {
        ...state,
        loadingRecipe: false,
        error: action.payload.error
      }
    case FETCH_INGREDIENT_STARTED:
      return {
        ...state,
        loading: true,
      }
    case FETCH_INGREDIENT_SUCCESS:
      let ingredients = action.payload.map( ingredient => {
        return {
          ...ingredient,
          selected: false
        }
      } )
      return {
        ...state,
        loading: false,
        ingredients: ingredients
      }
    case FETCH_INGREDIENT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
    case CLEAR_SUGGESTIONS:
      return {
        ...state,
        ingredients: []
      }
    case HOVER_INGREDIENT:{

      let newIngredientsList = Object.assign( [], state.ingredients )
      let result = newIngredientsList.map(ing => {
        return {
          ...ing,
          hover: ing._id === action.id ? true : false
        }
      })
      return {
        ...state,
        ingredients: result
      }
    }
    default: return state
  }
}

export default searchReducer
