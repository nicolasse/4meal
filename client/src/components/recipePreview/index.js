import React from 'react'
import {
  Wrapper,
  Info,
  Meal,
  MealList,
  Description,
  MealImg,
  LackList,
  LackIngredient,
  IconList,
  Preview,
} from './style'
import {connect} from 'react-redux'
import { add } from '../../actions/filterActions'

class RecipePreview extends React.Component {
  state= {
    showDescription: false,
    loaded: false,
  }

  lackIngredient = (recipeIngredients) => {
    let lack = []
    this.props.ingredients.map( ing => {
      return recipeIngredients = recipeIngredients.filter( dup => {return dup.nameId.name != ing.name} )
    } )
    return recipeIngredients
    
  }
  componentWillUnmount(){
    this.props.showNumber(null)
  }

  render(){
    let recipe = this.props.recipe
    return(
      <Wrapper
        column={this.props.column}
        loaded={this.state.loaded}
        changeOpacity={ this.props.changeOpacity && this.props.key !== this.props.number }
        onMouseEnter={()  =>{ this.props.showNumber(this.props.number);this.setState({showDescription: true })}}
        onMouseLeave={()  =>{ this.props.showNumber(null);this.setState({showDescription: false })}}
      >
          <LackList>
          {
              this.lackIngredient(recipe.ingredients).map( ing => {
              return (
                <LackIngredient >
                  <IconList
                    src={ing.nameId.img_url}
                    title={ing.nameId.name}
                    onClick={(e) => {
                      this.props.add(ing.nameId);
                      }
                    }
                  />
                </LackIngredient>
              )
            } )
          }
          </LackList>
          <Meal onClick={() => this.props.recipeId(recipe._id) } >

          <Preview>
            <MealImg
              src={ recipe.img_url }
              loaded={this.state.loaded}
              onLoad={(e) => {this.setState({loaded: true})}}
              onError={(e) => e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'}
            />
            <Info
              showDescription={this.state.showDescription}
            >
              { recipe.name }
              <Description>{ recipe.description }</Description>
            </Info>
          </Preview>
        </Meal>

      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({ ingredients: state.filterReducer, recipes: state.searchReducer.recipes })
const mapDispatchToProps = dispatch => ({
  add: (ingredient) => {
    dispatch(add(ingredient))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(RecipePreview)

