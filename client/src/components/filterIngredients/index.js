import React, { Component } from 'react'
import { Wrapper, Description, Img, IngredientFilter, Remove, List, Ingredient, Icon } from './style'
import { connect } from 'react-redux'
import { remove } from '../../actions/filterActions'


class Results extends Component {

  handleRemove = (id) => {
    this.props.remove(id)
  }

  showSelectedIngredients = () => {
    return this.props.ingredients.map( ingredient => {
      return (
        /*
        <IngredientFilter key={ ingredient.key }>
          { ingredient.name }
           <Remove onClick={ () => this.handleRemove(ingredient._id) }>
             x
          </Remove>
        </IngredientFilter>*/
        <Ingredient 
          key= {ingredient._id}
          onClick= { () => { this.handleRemove(ingredient._id) } }
        >
          { ingredient.name }
          <Icon src={ingredient.img_url} />
        </Ingredient>
      )
    })
  }

  render(){
    return(
      <Wrapper>
        <List>
          { this.showSelectedIngredients() }
        </List>
      </Wrapper>
    )

  }
}

const mapStateToProps = state => ({ ingredients: state.filterReducer })
const mapDispatchToProps = dispatch => ({
  remove: (id) => {
    dispatch( remove(id) )
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
