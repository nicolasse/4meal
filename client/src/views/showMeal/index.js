import React, { Component } from 'react'
import Recipe from '../../components/recipe'
import MealResults from '../../components/mealsResults'
import FilterIngredients from '../../components/filterIngredients'
import { Wrapper, Col, SearchSection, Main } from './style'
import { fetchRecipeById } from '../../actions/searchActions'
import SearchBar from '../../components/search-bar'

class ShowMeal extends Component {
  render(){
    return(
      <Wrapper>
        <Main>
            <Recipe id={ this.props.id } />
        </Main>
      </Wrapper>
    )
  }
}


export default ShowMeal
