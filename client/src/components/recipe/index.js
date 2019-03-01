import React, { Component } from 'react'
import {Li, Number,Info, Header, Wrapper, Title, Image, Description } from './style'


function Recipe(props){
  let recipes = props.recipe
  const showIngredients = (ingredients) =>
  {
    return ingredients.map( ingredient =>
    {
      return (
        <li>
          {
            ingredient.amount
            + ' ' +
            ingredient.measure
            + ' ' +
            ingredient.nameId.name
          }
        </li>
      )
    })
  }
    return(
      <Wrapper>
        <Header>
          <Image src={ recipes.img_url } />
          <Info>
            <h2>{ recipes.name }</h2>
            <br />
            <strong>{ recipes.category }</strong>
            <br />

            <Description>
              { '"' + recipes.description + '"' }
            </Description>
          </Info>
        </Header>
          Ingredients
          <ul>
            { recipes.ingredients ? showIngredients(recipes.ingredients): null }
          </ul>
          Directions:
          {
            recipes.directions 
              ?  <ul>{recipes.directions.map( (step, index) => {
                return <Li><Number>{index + 1}</Number>{step}</Li> } )
              }</ul> 
              : null
          }
      </Wrapper>
    )
}

export default Recipe
