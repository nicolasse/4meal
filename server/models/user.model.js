import mongoose from 'mongoose'

mongoose.Promise = global.Promise;

const UserSchema = new mongoose.Schema({
  facebook: {
    name: String,
    id: String
  }
})

module.exports = mongoose.model('User', UserSchema)
