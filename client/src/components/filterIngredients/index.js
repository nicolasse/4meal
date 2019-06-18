import React, { Component } from 'react'
import { RemoveHover,
  Wrapper,
  Description,
  Img,
  IngredientFilter,
  Remove,
  List,
  Li,
  Item,
  Ingredient,
  Icon } from './style'
import { connect } from 'react-redux'
import { remove } from '../../actions/filterActions'
import defaultImg from '../../default.jpg'


class Results extends Component {

  handleRemove = (id) => {
    this.props.remove(id)
  }

  showSelectedIngredients = () => {
    return this.props.ingredients.map( ingredient => {
      let loaded = false
      return (
        <Li>
          <Item>
            <Icon 
              src={ingredient.img_url}
              onError={(e) => {e.target.onerror = null;  e.target.src = defaultImg}}
            />
          <Ingredient 
            key= {ingredient._id}
            onClick= { () => { this.handleRemove(ingredient._id) } }
          >
            { ingredient.name }
          </Ingredient>
        </Item>
        </Li>
      )
    })
  }

  render(){
    return(
        <List column={this.props.column}>
          { this.showSelectedIngredients() }
        </List>
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
