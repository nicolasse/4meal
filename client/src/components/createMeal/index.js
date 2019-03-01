import React, { Component } from 'react'
import { 
  Wrapper,
  Select,
  Textarea,
  AddIngredient,
  AddDirections,
  Ingredient,
  Icon,
  Add,
  Create,
  FormContent
} from './style'
import { Input } from '../commons/style'
import { connect } from 'react-redux'
import SearchBar from '../search-bar'

const measures= ['tablespoon', 'teaspoon', 'cup', 'unity', 'half', 'quarter', 'gr', 'kg', 'to taste', 'slice']

class CreateMeal extends Component {
  state={
    nameId:{},
    measure:'tablespoon',
    amount: 1,
    directions: [],
    newDirection: '',
    ingredients: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleSubmit()
  }

  showIngredientsOptions = () => {
    return <div></div> 
  }

  showMeasures = () => {
    return measures.map(( measure, index) => {
      return <option key={index}>{ measure }</option>
    })
  }

  handleAdd = ( e ) => {
    this.setState({ nameId: e })
  }

  handleAddIngredient = (e) => {
    this.setState( prevState => ({
      ingredients: prevState.ingredients.concat( [{amount: prevState.amount, measure: prevState.measure, nameId: prevState.nameId}] )
    }), () => {
      this.props.add(this.state.ingredients)
    } )
  }

  handleChange = ( e ) => {
    let name = e.target.name
    let value
    if(e.target.type === 'number'){
      value = parseInt(e.target.value)
    }
    else {
      value = e.target.value
    }
    this.setState({ [name]: value })
  }

  handleChangeDirection = (e) => {
    this.setState( { newDirection: e.target.value })
  }

  handleAddDirection = () => {
    this.setState( (prevState) => ({
      directions: prevState.directions.concat([ prevState.newDirection ]),
      newDirection: ''
    }),() => {
      this.props.handleChange({target: {name: 'directions', value: this.state.directions}})})
  }


  handleRemove = (index, type) => {
    let newArray = Object.assign([], this.state[type])
    newArray.splice(index,1)
    this.setState((prevState)=> ({
      [type]: newArray
    }), () => {
      this.props.add(this.state.ingredients)
    })
  }

  handleEnterPress = (e) => {
    if(e.key === 'Enter'){
      e.preventDefault()
      this.handleAddDirection()
    }
  }


  render(){
    return(
      <Wrapper>
        <form onSubmit={ this.handleSubmit }>
        <FormContent>
          Meal
          <Input
            onChange={ this.props.handleChange }
            placeholder='name'
            name='name'
            autoFocus
            required
          />
          Image
          <Input
            onChange={ this.props.handleChange }
            placeholder='image url' 
            name='img_url'
            required
          />
          <br />
          Select category
          <Select 
            name='category'
            onChange={ this.props.handleChange }
          >
            <option>snack</option>
            <option>complex</option>
          </Select>
          <br /><br />Description
          <Textarea 
            type='text'
            onChange={ this.props.handleChange }
            name='description'
            placeholder='Write a description here...'
          />
          <SearchBar add={ this.handleAdd} autoFocus={false}/>
          +ingredients: amount measure
          <AddIngredient>
            <Ingredient>
              { this.state.nameId.name }
              <Icon src={ this.state.nameId.img_url } />
            </Ingredient>
            <Input
              onChange={ this.handleChange }
              type='number'
              name='amount'
              defaultValue='1'
              style={{ width: '2em', heigth: '2em', 'text-align': 'center'}}
            />
            <Select onChange={ this.handleChange } name='measure'>
              { this.showMeasures() }
            </Select>
            <Add onClick={ this.handleAddIngredient }>Add</Add>
          <ul>
            { this.state.ingredients.map( (ing, index) => {
              return (
                <li key={ing.nameId._id}>
                  {ing.nameId.name}
                  <span onClick={ () => { this.handleRemove(index, 'ingredients') } }>(remove)</span>
                </li>
              )
              } ) 
            }
          </ul>
          </AddIngredient>
          <AddDirections>
          +directions
          <Input 
              value={ this.state.newDirection }
              onChange={ this.handleChangeDirection }
              placeholder='Add direction...'
              onKeyPress={ this.handleEnterPress }
          />
            <ul>
              { this.state.directions.map( (direction, index ) => {
                  return (
                    <li key={index}>{ direction + " "}
                      <span onClick={
                        () => { this.handleRemove(index, 'directions') }
                      }>(remove)
                      </span>
                    </li>
                  )
              }) }
            </ul>
          </AddDirections>
          </FormContent>
          <Create value='Create' />
        </form>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({ ingredients: state.ingredi })

export default CreateMeal
