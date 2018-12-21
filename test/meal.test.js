import request from 'supertest'
import chai from 'chai'
import data from './data/recipes'
import nock from 'nock'
import sinon from 'sinon'
import Recipe from '../server/models/recipe.model'
const expect = chai.expect
var app,auth

before((  ) => {
  auth = require('../server/controllers/auth.controller')
  sinon.stub( auth, 'ensureAuthenticated' )
    .callsFake((req, res, next) => { return next() })
  app = require('../server/index.js')


})

after(() => {
  auth.ensureAuthenticated.restore();
});



describe('Login', () => {
  it('login redirect to facebook', ( done ) => {
    request(app)
      .get('/api/auth/facebook')
      .end( ( err, res ) => {
        expect( res.statusCode ).to.equal(302)
        done()
      })
  })
})


describe('Meals', () => {
  beforeEach(() => { Recipe.deleteMany({})
      .then( (res) => {
        return res
      }
      )
      .catch( err => console.log(err) )
    
  })
  describe('POST /meals', () => {
    it('create a new meal', (done) => {
    request(app)
        .post('/api/meals/')
        .send(data.smoothie)
        .end( (err, res) => {
          if(err){
            done(err)
          }
          expect(res.statusCode).to.equal(201)
          done()
        } )
    })
  })

  describe('GET /meals', () => {
    it('respond with array containing an empty list of meals', ( done ) => {
    Recipe( data.smoothie ).save()
      .then( ()  => {
      request(app)
        .get('/api/meals')
        .end( (err, res) => {
          expect(res.statusCode).to.equal(200)
          expect(res.body).to.be.an('array')
          expect(res.body).to.have.lengthOf(1)
          expect(res.body[0]).to.have.property('name')
          expect(res.body[0]).to.have.property('description')
          expect(res.body[0]).to.have.property('ingredients')
          expect(res.body[0]).to.have.property('directions')
          expect(res.body[0]).to.have.property('likes')
          expect(res.body[0]).to.have.property('dislikes')
          done()
        } )
      })
      .catch( err => {
        console.log(err)
          done()
      } )
    })

    it('respond with array containing all the meals', ( done ) =>{
      Recipe( data.smoothie ).save()
        .then( () => Recipe( data.frittata ).save())
        .then( () => {
      request(app)
        .get('/api/meals')
        .end( (err, res) =>{
          expect(res.statusCode).to.equal(200)
          expect(res.body).to.be.an('array')
          expect(res.body).to.have.lengthOf(2)
          done()
        } )
        
      })
      .catch( err => console.log(err) )
    })

    it('get recipe by id', ( done ) => {
      let frittata = new Recipe( data.frittata ) 
      frittata.save()
      .then( ()  => {
      request(app)
        .get('/api/meals/' + frittata._id)
        .end( ( err, res ) => {
          expect(res.statusCode).to.equal(200)
          expect(res.body).to.be.an('object')
          expect(res.body).to.have.property('name')
          expect(res.body).to.have.property('description')
          expect(res.body).to.have.property('ingredients')
          expect(res.body).to.have.property('directions')
          expect(res.body).to.have.property('likes')
          expect(res.body).to.have.property('dislikes')
          done()
      } )
      })
    })

    it('should get 404 with wrong id', ( done ) => {
      request(app)
        .get('/api/meals/someWrongId')
        .end( ( err, res ) => {
          expect(res.statusCode).to.equal(404)
          done()
        } )
    })
  })

})
