import SearchBar from '../../components/search-bar'
import MealsResults from '../../components/mealsResults'
import FilterIngredients from '../../components/filterIngredients'
import React, { Component } from 'react'
import Header from '../../components/header'
import {Main, Wrapper, Section, SearchSection } from './style'
import { clearSuggestions } from '../../actions/searchActions'
import { connect } from 'react-redux'
import { add } from '../../actions/filterActions'

class Home extends Component {
  handleAnyClick = ()=>{
    this.props.clearSuggestions()
  }
  render(){
    return (
      <Wrapper onClick={ this.handleAnyClick }>
        <Header />
          <SearchSection>
            <SearchBar add={ this.props.add }/>
          </SearchSection>
        <Main>
          <Section ingredients>
            <FilterIngredients />
          </Section>
          <Section>
            <MealsResults />
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
