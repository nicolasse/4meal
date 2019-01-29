import axios from 'axios'

export const FETCH_CREDENTIALS_STARTED = 'FETCH_CREDENTIALS_STARTED'
export const FETCH_CREDENTIALS_SUCCESS = 'FETCH_CREDENTIALS_SUCCESS'
export const FETCH_CREDENTIALS_FAILURE = 'FETCH_CREDENTIALS_FAILURE'

export const fetchCredentials = () => {
  return dispatch => {
    dispatch( fetchCredentialsStarted() )
    axios({
      method: 'GET',
      url: '/api/auth/facebook',
    })
      .then( res =>{
        dispatch(fetchCredentialsSuccess(res.data))
      } )
      .catch( err => {
        dispatch(fetchCredentialsFailure(err.message))
      } )
  }
}

const fetchCredentialsSuccess = credentials => ({
  type: FETCH_CREDENTIALS_SUCCESS,
  payload: credentials
})

const fetchCredentialsStarted = () => ({
  type: FETCH_CREDENTIALS_STARTED
})

const fetchCredentialsFailure = error => ({
  type: FETCH_CREDENTIALS_FAILURE,
  payload: error
})
