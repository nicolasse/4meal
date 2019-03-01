import SearchBar from '../../components/search-bar'
import MealsResults from '../../components/mealsResults'
import FilterIngredients from '../../components/filterIngredients'
import React, { Component } from 'react'
import Header from '../../components/header'
import {Main, Wrapper, Section, SearchSection, CreateMeal } from './style'
import { clearSuggestions } from '../../actions/searchActions'
import { connect } from 'react-redux'
import { add } from '../../actions/filterActions'
import Navbar from '../../components/navbar'

class Home extends Component {
  state= {
    id: ''
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
              What do you have in your fridge?
            <SearchBar add={ this.props.add } autoFocus/>
          </SearchSection>
        <Main>
          <Section ingredients>
            <FilterIngredients />
          </Section>
          <Section>
            <MealsResults handleClick={ this.handleClick }/>
          </Section>
        </Main>
      </Wrapper>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  clearSuggestions: () => {
    dispatch(clearSuggestions())
  },
  add: ( ingredient ) => {
    dispatch( add(ingredient) )
  },
})

export default connect(null, mapDispatchToProps)(Home)
