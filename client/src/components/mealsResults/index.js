import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchRecipes } from '../../actions/searchActions'
import {
  Info,
  Meal,
  MealList,
  Description,
  MealImg,
  LackList,
  LackIngredient,
  ItemList,
  Right,
  Left
} from './style'
import RecipePreview from '../recipePreview'

class MealsResults extends Component {
  state = {
    hideDescription: true,
    showPreviewNumber: null,
    right: 0,
    interval: null,
  }

  componentDidUpdate = prevProps => {
    if(this.props.ingredients !== prevProps.ingredients){
        let query = this.props.ingredients.reduce((a, b) => {
          return a+=b._id+','
          }, '')
        this.props.fetchRecipes(query)
      this.setState({right: 0})
      }
  }

  handleSlide = (direction) => {
    let limit = this.props.recipes.length * 170 - 170
    let int
    if(direction === 'right' && this.state.right >= 0 ){
      
      int = setInterval(() => {
        if(this.state.right < limit)
        this.setState(prev => ({right: prev.right + 170}))
      },500)
    }
    else if(this.state.right >= 170 ) {
      int = setInterval(() => {
        if(this.state.right > 0)
        this.setState(prev => ({right: prev.right - 170}))
      }, 500)
    }
    this.setState({interval: int})
  }


  showMeals = () => {
    return this.props.recipes.map( (recipe, i) => {
      return (
        <ItemList right={this.state.right}column={this.props.column}>
          <RecipePreview
            recipeId={this.props.recipeId}
            key={i} 
            number={i}
            changeOpacity={ this.state.showPreviewNumber !== i && this.state.showPreviewNumber !== null}
            showNumber={ (k) => this.setState({showPreviewNumber: k}) }
            recipe={recipe}
          />
        </ItemList>
      )
    })
  }

  render(){
    return(
      <>
        <MealList column={this.props.column} hide={this.props.recipes.length === 0} >
          <Left 
            onMouseEnter={() => this.handleSlide('left')}
            onMouseLeave={() => clearInterval(this.state.interval)}
          />
          { this.showMeals() }
          <Right 
            onMouseEnter={() => this.handleSlide('right')}
            onMouseLeave={() => clearInterval(this.state.interval)}
          />
        </MealList>
      </>
    )
  }

}

const mapStateToProps = state => ({ ingredients: state.filterReducer, recipes: state.searchReducer.recipes, loading: state.searchReducer.loading })
const mapDispatchToProps = dispatch => ({
  fetchRecipes: ( ids ) => {
    dispatch(fetchRecipes(ids))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(MealsResults)
