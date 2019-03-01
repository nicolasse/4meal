import CreateMeal from '../../components/createMeal'
import Recipe from '../../components/recipe'
import { Wrapper, Section, Title } from './style'
import axios from 'axios'

import React, { Component } from 'react'

class Meal extends Component {
  state= {
    name: '',
    img_url: '',
    category:'snack',
    description: '',
    ingredients: [],
    directions: []

  }

  handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]: value})
  }

  handleSubmit = () => {
    let toSubmit = {
      ...this.state,
      ingredients: this.state.ingredients.map( ingredient => {
        return {
          nameId: ingredient.ingredientObject._id,
          amount: ingredient.amount,
          measure: ingredient.measure
        }
      } )
    }
    axios.post('/api/meals', toSubmit)
      .then( res => {
        console.log('success!')
        this.props.history.goBack()
      } )
      .catch( err => {
        console.log('ERROR!')
      } )
  }

  addIngredient = (ingredient) => {
   this.setState({ ingredients: ingredient  }) 
  }

  render() {
    return(
      <Wrapper>
        <Section small>
          <Title>
            Create Meal
          </Title>
          <CreateMeal
            handleChange= { this.handleChange }
            add= { this.addIngredient } 
            handleSubmit= { this.handleSubmit }
          />
        </Section>
        <Section>
          <Title>
            Preview
          </Title>
          <Recipe recipe= { this.state }/>
        </Section>
      </Wrapper>
    )
  }
}

export default Meal
