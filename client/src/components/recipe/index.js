import React from 'react'
import { Wrapper, Title, Image, Description } from './style'

const Recipe = (props) => {
  const showIngredients = () => {
    return props.info.ingredients.map( ingredient => {
      return <li>{ 
        ingredient.amount
        + ' ' +
        ingredient.measure
        + ' ' +
        ingredient.ingredientObject.name }
        </li>
    } )
  }
  return(
    <Wrapper>
      <Image src={ props.info.image_url } />
      Name: <strong>{ props.info.name }</strong>
      Type:
        <br />
        <strong>{ props.info.category }</strong>
        Ingredients

        Description:<br />
        <Description>
        { props.info.description }
        </Description>
        <ul>
        { showIngredients() }
        </ul>
        Instructions
    </Wrapper>
  )
}

export default Recipe
