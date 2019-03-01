import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/searchActions'
import { Info, Meal, MealList, Description, MealIcon } from './style'

class MealsResults extends Component {
  componentDidUpdate = prevProps => {
    if(this.props.ingredients !== prevProps.ingredients){
        let query = this.props.ingredients.reduce((a, b) => {
          return a+=b._id+','
          }, '')
        this.props.fetchRecipes(query)
      }
  }


  showMeals = () => {
    return this.props.recipes.map( recipe => {
      return (
        <Meal onClick={ () => {this.props.handleClick(recipe._id) }}to={ '/meals/'+ recipe._id }>
          <Info>
            { recipe.name }
            <Description>{ recipe.description }</Description>
          </Info>
          <MealIcon src={ recipe.img_url }/>

        </Meal>
      )
    })
  }

  render(){
    return(
      <MealList>
        { this.showMeals() }
      </MealList>
    )
  }

}

const mapStateToProps = state => ({ ingredients: state.filterReducer, recipes: state.searchReducer.recipes })
const mapDispatchToProps = dispatch => ({
  fetchRecipes: ( ids ) => {
    dispatch(fetchRecipes(ids))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MealsResults)
