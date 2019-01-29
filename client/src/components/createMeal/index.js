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
  Create
} from './style'
import { Input } from '../commons/style'
import { connect } from 'react-redux'
import SearchBar from '../search-bar'

const measures= ['tablespoon', 'teaspoon', 'cup', 'unity', 'half', 'quarter', 'gr', 'kg', 'to taste', 'slice']

class CreateMeal extends Component {
  state={
    ingredientObject:{},
    measure:'tablespoon',
    amount: 1,
    directions: []
  }

  handleSubmit = (e) => {
    e.preventDefault()
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
    this.setState({ ingredientObject: e })
  }

  handleAddIngredient = (e) => {
    this.props.add(this.state)
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

  render(){
    return(
      <Wrapper>
        <form onSubmit={ this.handleSubmit }>
          Meal
          <Input
            onChange={ this.props.handleChange }
            placeholder='name'
            name='name'
            required
          />
          Image
          <Input
            onChange={ this.props.handleChange }
            placeholder='image url' 
            name='image_url'
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
            onChange={ this.props.handleChange }
            name='description'
            placeholder='Write a description here...'
            required
          />
          <SearchBar add={ this.handleAdd}/>
          +ingredients: amount measure
          <AddIngredient>
            <Ingredient>
              { this.state.ingredientObject.name }
              <Icon src={ this.state.ingredientObject.img_url } />
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
          </AddIngredient>
          <AddDirections>
          +directions
          <Input />
            <Add >Add</Add>
          </AddDirections>
          <Create value='Create' />
        </form>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({ state: state.ingredi })

export default CreateMeal
