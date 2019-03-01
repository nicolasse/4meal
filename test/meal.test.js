require('babel-polyfill')
import request from 'supertest'
import chai from 'chai'
import recipesModule from './data/recipes'
import nock from 'nock'
import sinon from 'sinon'
import Recipe from '../server/models/recipe.model'
import Ingredient from '../server/models/ingredient.model'

const expect = chai.expect
var app,auth
const data = recipesModule.recipes
var ingredients = []

const getIngredient = ( ingredient ) => {
  let dbIngredient = ingredients.find( x => {
    return x.name === ingredient.nameId
  } )
  return {
    ...ingredient,
    nameId: dbIngredient._id,
  }
}




before( async () => {
  auth = require('../server/controllers/auth.controller')
  sinon.stub( auth, 'ensureAuthenticated' )
    .callsFake((req, res, next) => { return next() })
  app = require('../server/index.js')
  await Ingredient.deleteMany({})
  let ingPromises = recipesModule.ingredients.map((ingredient) => {
    let ingredientToSave = new Ingredient(ingredient)
     return ingredientToSave.save()
  } )
  await Promise.all( ingPromises )
  await Ingredient.find()
    .then( res => {
      ingredients = res;
    } )
    .catch(err => console.log(err))
  Object.keys(data).forEach( recipe => {
    let newIngredients = data[recipe].ingredients.map( ingredient => {
      return getIngredient( ingredient )
    } )
    data[recipe].ingredients = newIngredients
  } )

})

after(() => {
  auth.ensureAuthenticated.restore();
});

describe('Login', () => {
  describe('GET /auth/facebook', () => {
    it('login redirect to facebook', ( done ) => {
      request(app)
        .get('/api/auth/facebook')
        .end( ( err, res ) => {
          expect( res.statusCode ).to.equal(302)
          done()
        })
    })
  })
})

describe('Meals', () => {
  beforeEach(() => { Recipe.deleteMany({})
      .then( (res) => {
        return res
      }
      )
      .catch( err => console.log( 'BeforeEach error' ) )
    
  })
  describe('POST /meals',  () => {
    it('create a new meal',  (done) => {
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
  describe('GET /meals/:id', () => {
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
      .catch( err => done() )
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
  describe('GET /meals?query=', () => {
    it('should get all recipes with banana', ( done ) => {
      let banana = getIngredient({nameId: 'banana'})
      Recipe( data.smoothie ).save()
        .then( () => {
          request(app)
            .get('/api/meals?ingredients='+banana.nameId)
            .end( (err, res)  => {
              expect(res.statusCode).to.equal(200)
              expect(res.body).to.be.an('array')
              expect(res.body).to.have.lengthOf(1)
              done()
            })
        } )
    })
    it('should get an empty array', ( done ) => {
      let egg = getIngredient({nameId: 'egg'})
      Recipe( data.smoothie ).save()
        .then( () => {
          request(app)
            .get('/api/meals?ingredients='+egg.nameId)
            .end( (err, res)  => {
              expect(res.statusCode).to.equal(200)
              expect(res.body).to.be.an('array')
              expect(res.body).to.have.lengthOf(0)
              done()
            })
        } )
    })
  })

})
