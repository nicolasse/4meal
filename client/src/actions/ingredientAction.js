import axios from 'axios'

export const CREATE_INGREDIENT_STARTED = 'CREATE_INGREDIENT_STARTED'
export const CREATE_INGREDIENT_SUCCESS = 'CREATE_INGREDIENT_SUCCESS'
export const CREATE_INGREDIENT_FAILURE = 'CREATE_INGREDIENT_FAILURE'

export const createIngredient = ( ingredient, img_url ) => {
  return dispatch => {
    dispatch( createIngredientStarted() )
    axios({
      method: 'POST',
      url: '/api/ingredients',
      body: {
        name: ingredient,
        img_url: img_url,
      }
    })
      .then( res => {
        dispatch( createIngredientSuccess( res.data ) )
      } )
      .catch( err => {
        dispatch( createIngredientFailure( err.message ) )
      } )
  }
}

const createIngredientStarted = ingredient => ({
  type: CREATE_INGREDIENT_STARTED,

})

const createIngredientSuccess = ingredient => ({
  type: CREATE_INGREDIENT_SUCCESS,
  payload: ingredient,
})

const createIngredientFailure = error => ({
  type: CREATE_INGREDIENT_FAILURE,
  payload: error,
})
