import axios from 'axios'

export const LOGGED = 'LOGGED'
export const LOGOUT = 'LOGOUT'

export const logged = (user) => { 
  return {
    type: LOGGED,
    payload: user

  }
}

export const logout = () => {
  return {
    type: LOGOUT
  }

}
