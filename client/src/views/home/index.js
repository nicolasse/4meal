import MealsResults from '../../components/mealsResults'
import FilterIngredients from '../../components/filterIngredients'
import React, { Component } from 'react'
import Header from '../../components/header'
import {
  Background,
  Main,
  Wrapper,
  FilterSection,
  Section,
  SearchSection,
  CreateMeal,
  Title,
  Container,
  RecipeSection
} from './style'
import { clearSuggestions } from '../../actions/searchActions'
import { connect } from 'react-redux'
import SearchBar from '../../components/search-bar'
import MealResult from '../../components/mealsResults'
import Recipe from '../../components/recipe'
import ShowMeal from '../showMeal'

class Home extends Component {
  state= {
    id: null
  }
  handleAnyClick = ()=>{
    this.props.clearSuggestions()
  }

  handleClick = (id) => {
    this.setState({ id: id })

  }
  render(){
    return (
      <Wrapper onClick={ this.handleAnyClick }>
      <SearchSection>
        <Container >
          <Title>  
          What do you have in your fridge?
          </Title>  
          <SearchBar />
        </Container>
      </SearchSection>
      <FilterSection >
        <FilterIngredients />
        </FilterSection>
          <Section>
          <MealResult recipeId={this.handleClick}/>
        </Section>
        <RecipeSection>
        <Recipe scroll id={this.state.id}/>
      </RecipeSection>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  clearSuggestions: () => {
    dispatch(clearSuggestions())
  },
})

export default connect(null, mapDispatchToProps)(Home)

