import React, { Component } from 'react'
import Recipe from '../../components/recipe'
import { Wrapper } from './style'
import { connect } from 'react-redux'
import { fetchRecipeById } from '../../actions/searchActions'

class ShowMeal extends Component {
  componentDidMount(){
    if(this.props.id){
      this.props.fetchRecipeById( this.props.id )
    }

  }
  render(){
    return(
      <Wrapper>
        <Recipe id={ this.props.id } recipe={ this.props.recipe }/>
      </Wrapper>
    )
  }
}

const mapStateToProps = ( state ) => ({
  recipe: state.searchReducer.recipe
})
const mapDispatchToProps =  dispatch  => ({
  fetchRecipeById: (id) => {
    dispatch( fetchRecipeById(id) )
  }
})


export default connect(mapStateToProps, mapDispatchToProps)(ShowMeal)
