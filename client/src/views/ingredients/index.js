import CreateIngredient from '../../components/createIngredient'

import React, { Component } from 'react'
import { Wrapper  } from './style'

class Ingredients extends Component {
  render(){
    return(
      <Wrapper>
      <CreateIngredient/>
      </Wrapper>
    )
  }
}

export default Ingredients
