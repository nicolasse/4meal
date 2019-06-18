import request from 'supertest'
import chai from 'chai'
import recipesModule from './data/recipes'
import nock from 'nock'
import sinon from 'sinon'
import Recipe from '../server/models/recipe.model'
import Ingredient from '../server/models/ingredient.model'

const expect = chai.expect
var app,auth
var data = recipesModule.recipes
var ingredientsList = []


const userTest = {
  name: 'Test user',
  picture: 'http://comisioncontralores.gob.mx/2017/media/zoo/images/person-placeholder-1_ac12fba19beedab1b623012c6f082319.jpg',
  user_id: '4FF3DJSRE3',

}
const getIngredient =  ( ingredient ) => {
  return ingredientsList.find(x => {
    return x.name === ingredient.nameId })
}
const loadDb = async () => {
  let ingPromises = recipesModule.ingredients.map((ingredient) => {
    let ingredientToSave = new Ingredient(ingredient)
     return ingredientToSave.save()
  } )
  await Promise.all( ingPromises )
  return Ingredient.find().then( ingredients => {
    ingredientsList = ingredients
    let toSave = []
    Object.keys(data).forEach( recipe => {
      let newIngredients = [] 
      newIngredients = data[recipe].ingredients.map(ingredient => {
          let r
          r = ingredients.find( ing => { return ing.name === ingredient.nameId } )
          return {...ingredient, nameId: r._id}
        })
      data[recipe].ingredients = newIngredients
      let recipeToSave = new Recipe(data[recipe])
      toSave.push(recipeToSave.save())
    })
     return Promise.all(toSave).then(res => console.log('loaded')).catch(e => console.log(e))
  })
}

describe('4Meal testing', () => {
  before( async () => {
    auth = require('../server/auth')
    sinon
      .stub( auth, 'isAuthenticated' )
      .callsFake((req, res, next) => {
        req.user = userTest
        return next()
      })
    app = require('../server/index.js')
    await Recipe.deleteMany({})
    await Ingredient.deleteMany({})
    await loadDb()
  })

  after( async() => {
    auth.isAuthenticated.restore();
  });


  describe('Meals', () => {
    beforeEach(() => {
      Recipe
        .deleteMany({})
        .then( (res) => {
          return res
        })
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
          })
      })
      it('should get an error for wrong recipe',  (done) => {
       request(app)
          .post('/api/meals/')
          .send({...data.smoothie, category: 'other'})
          .end( (err, res) => {
            if(err){
              done(err)
            }
            expect(res.statusCode).to.equal(500)
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
          })
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
              .get('/api/meals?ingredients='+banana._id)
              .end( (err, res)  => {
                expect(res.statusCode).to.equal(200)
                expect(res.body).to.be.an('array')
                expect(res.body).to.have.lengthOf(1)
                done()
              })
          } )
      })
      it('should get an empty array for no meal match', ( done ) => {
        let egg = getIngredient({nameId: 'egg'})
        Recipe( data.smoothie ).save()
          .then( () => {
            request(app)
              .get('/api/meals?ingredients='+egg._id)
              .end( (err, res)  => {
                expect(res.statusCode).to.equal(200)
                expect(res.body).to.be.an('array')
                expect(res.body).to.have.lengthOf(0)
                done()
              })
          } )
      })
      it('should get an empty array for non ingredient', ( done ) => {
        Recipe( data.smoothie ).save()
          .then( () => {
            request(app)
              .get('/api/meals?ingredients=')
              .end( (err, res)  => {
                expect(res.statusCode).to.equal(200)
                expect(res.body).to.be.an('array')
                expect(res.body).to.have.lengthOf(0)
                done()
              })
          } )
      })
      it('should get an empty array for an unexcist ingredient', ( done ) => {
        let nonIngredient = {nameId: 'aslkdj3la3lgjalh'}
        Recipe( data.smoothie ).save()
          .then( () => {
            request(app)
              .get('/api/meals?ingredients='+nonIngredient._id)
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

  describe('Ingredients', () => {
    describe('POST /ingredients', () => {
      it('create a new ingredient', done => {
        request(app)
          .post('/api/ingredients')
          .send({ name: 'laranja', img_url: 'url.png' })
          .end( (err, res) => {
            expect(res.statusCode).to.equal(200)
            expect(res.body).to.be.an('object')
            expect(res.body).to.have.a.property('name')
            expect(res.body).to.have.a.property('img_url')
            done()
          } )
      })
      it('should get an error for required name', done => {
        request(app)
          .post('/api/ingredients')
          .send({img_url: 'some'})
          .end( (err, res) => {
            expect(res.statusCode).to.equal(500)
            done()
          })
      })
      it('should get an error for required img_url', done => {
        request(app)
          .post('/api/ingredients')
          .send({name: 'some'})
          .end( (err, res) => {
            expect(res.statusCode).to.equal(500)
            done()
          })
      })
      it('should get an error for unique name', done => {
        request(app)
          .post('/api/ingredients')
          .send({name: 'banana', img_url: 'some.png'})
          .end( (err, res) => {
            expect(res.statusCode).to.equal(500)
            done()
          })
      })
    })
    describe('GET /ingredients/suggest/:ingredient', () => {
      it('should get an array of suggestions', (done) => {
        request(app)
          .get('/api/ingredients/suggest/ban')
          .end( (err, res) => {
            expect( res.statusCode ).to.equal(200)
            expect(res.body).to.be.an('array')
            done()
          })
      })
      it('should get an empty array for non alphabetic characters', (done) => {
        request(app)
          .get('/api/ingredients/suggest/$#!')
          .end( (err, res) => {
            expect( res.statusCode ).to.equal(200)
            expect(res.body).to.be.an('array')
            expect(res.body).to.have.lengthOf(0)
            done()
          })
      })
    })
  })
})
