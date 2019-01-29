import CreateMeal from '../../components/createMeal'
import Recipe from '../../components/recipe'
import { Wrapper, Section, Title } from './style'

import React, { Component } from 'react'

class Meal extends Component {
  state= {
    name: '',
    image_url: '',
    category:'snack',
    description: '',
    ingredients: [
    ],
    directions: []

  }

  handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]: value})
  }

  addIngredient = (ingredient) => {
   this.setState((prevState, props) =>  { 
     return { ingredients: prevState.ingredients.concat(ingredient) }
   }) 
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
          />
        </Section>
        <Section>
          <Title>
            Preview
          </Title>
          <Recipe info= { this.state }/>
        </Section>
      </Wrapper>
    )
  }
}

export default Meal
