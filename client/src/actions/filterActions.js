
export const SELECT_INGREDIENT = 'SELECT_INGREDIENT'
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT'

export const add = ingredient => {
  return {
    type: SELECT_INGREDIENT,
    ingredient
  }
}

export const remove = id => {
  return {
    type: REMOVE_INGREDIENT,
    id
  }
}
