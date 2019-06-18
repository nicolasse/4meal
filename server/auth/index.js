import config from 'config'
import User from '../models/user.model'

import admin from 'firebase-admin'
import serviceAccount from '../../config/serviceAccountKey.json'

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://meal-2c7e0.firebaseio.com"

});

const authService = admin.auth()


exports.isAuthenticated = async( req, res, next ) => {
  let decodedToken
  const idToken = req.header('token')
  try {
    decodedToken = await authService.verifyIdToken(idToken)
    req.user = decodedToken
    return next()
  } catch(e){
    return res.status(403).json({message: 'No token provided'})
  }

  console.log('shouldnt extecute this part')
}
