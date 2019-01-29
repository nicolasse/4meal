import axios from 'axios'

export const FETCH_RECIPES_STARTED = 'FETCH_RECIPES_STARTED'
export const FETCH_RECIPES_SUCCESS = 'FETCH_RECIPES_SUCCESS'
export const FETCH_RECIPES_FAILURE = 'FETCH_RECIPES_FAILURE'

export const FETCH_INGREDIENT_STARTED = 'FETCH_INGREDIENT_STARTED'
export const FETCH_INGREDIENT_SUCCESS = 'FETCH_INGREDIENT_SUCCESS'
export const FETCH_INGREDIENT_FAILURE = 'FETCH_INGREDIENT_FAILURE'

export const CLEAR_SUGGESTIONS = 'CLEAR_SUGGESTIONS'

export const HOVER_INGREDIENT = 'HOVER_INGREDIENT' 

export const fetchRecipes = ( ingredients ) => {
  return dispatch => {
    dispatch( fetchRecipesStarted() )
    axios({
      method: 'GET',
      url: '/api/meals/' + ingredients
    })
      .then( res => {
        dispatch(fetchRecipesSuccess(res.data))
      } )
      .catch( err => {
        dispatch(fetchRecipesFailure(err.message))
      } )
  }
}

const fetchRecipesSuccess = recipes => ({
  type: FETCH_RECIPES_SUCCESS,
  payload: recipes
})

const fetchRecipesStarted = () => ({
  type: FETCH_RECIPES_STARTED,
})

const fetchRecipesFailure = error => ({
  type: FETCH_RECIPES_FAILURE,
  payload: error
})

export const fetchIngredient =  ( ingredient ) => {
  return dispatch => {
    dispatch( fetchIngredientStarted() )
    axios({
      method: 'GET',
      url: '/api/ingredients/suggest/' + ingredient
    })
      .then( res => {
        dispatch(fetchIngredientSuccess(res.data))
      } )
      .catch( err => {
        dispatch(fetchIngredientFailure(err.message))
      } )
  }
}

const fetchIngredientStarted = () => ({
  type: FETCH_INGREDIENT_STARTED,
})

const fetchIngredientSuccess = (ingredients) => ({
  type: FETCH_INGREDIENT_SUCCESS,
  payload: ingredients
})

const fetchIngredientFailure = error => ({
  type: FETCH_INGREDIENT_STARTED,
  payload: error
})

export const clearSuggestions = () => ({
  type: CLEAR_SUGGESTIONS
})

export const selectIngredient = (id) => ({
  type: HOVER_INGREDIENT,
  id
})
