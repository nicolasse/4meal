import passport from 'passport'
var FacebookStrategy = require('passport-facebook').Strategy
import config from 'config'
import User from '../models/user.model'

let configFacebook = config.get('4meal.facebook')

exports.config = () => { passport.use( new FacebookStrategy({
    clientID: configFacebook.app_id,
    clientSecret: configFacebook.app_secret,
    callbackURL: configFacebook.callback
  },
  ( accessToken, refreshToken, profile, done ) => {
    let newUser = new User({
      facebook: {
        id: profile.id,
        name: profile.displayName
      }
    })
    User.findOne({ 'facebook.id': newUser.facebook.id })
      .then( userFound => {
        if( !userFound ) {
          newUser.save().then( saved => done( null, saved ) )
        }
        else {
          done( null, userFound )
        }
      } )
  }
) )
}

exports.scope = (req, res) => {
  passport.authenticate('facebook', { scope: 'email' })
}

exports.callback = (req, res) =>{
  passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login' })
}

exports.ensureAuthenticated = ( req, res, next ) => {
  if(req.isAuthenticated()){
    return next()
  }
  res.redirect('/auth/facebook')
}
