import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import config from 'config'
import router from './routes'
import facebookStrategy from './controllers/auth.controller'
import passport from 'passport'
import https from 'https'
import fs from 'fs'
import User from './models/user.model'

const app = express()
const port =  8080
const configDb = config.get('4meal.db')

mongoose.connect( configDb, { useNewUrlParser: true } )
if(process.env.NODE_ENV !== 'test'){
  app.use(morgan('dev'))
}
app.use(passport.initialize())
passport.deserializeUser(function(id, done) {
  User.findOne({'facebook.id': id}, function(err, user) {
    done(err, user);
  });
});
passport.serializeUser(function(user, done) {
  done(null, user.facebook.id);
});
app.use(passport.session())
app.use(bodyParser.json())
facebookStrategy.config()
app.use(bodyParser.urlencoded({extended: false}))
app.use('/api', router)

https.createServer({
  key: fs.readFileSync('config/server.key'),
  cert: fs.readFileSync('config/server.cert'),
}, app).listen( port, () => {
  if(process.env.NODE_ENV !== 'test')
    console.log('Runing on port: ' + port)
} )

module.exports = app
