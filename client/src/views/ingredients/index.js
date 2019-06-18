import CreateIngredient from '../../components/createIngredient'

import React, { Component } from 'react'
import { Wrapper, Title  } from './style'

class Ingredients extends Component {
  render(){
    let state = this.props.location.state || ''
    return(
      <Wrapper>
        <Title>Create Ingredient</Title>
        <CreateIngredient name={ state.name }/>
      </Wrapper>
    )
  }
}

export default Ingredients
