import CreateMeal from '../../components/createMeal'
import Recipe from '../../components/recipe'
import { Wrapper, Section, Title } from './style'
import axios from 'axios'
import { connect } from 'react-redux'

import React, { Component } from 'react'

class Meal extends Component {
  state= {
    name: '',
    img_url: '',
    category:'snack',
    description: '',
    ingredients: [],
    directions: [],
    hidePreview: true,

  }

  handleChange = e => {
    let name = e.target.name
    let value = e.target.value
    this.setState({[name]: value})
  }

  handleSubmit = () => {
    let toSubmit = {
      ...this.state,
      ingredients: this.state.ingredients.map( ingredient => {
        return {
          nameId: ingredient.nameId._id,
          amount: ingredient.amount,
          measure: ingredient.measure
        }
      } )
    }
    axios.post('/api/meals', toSubmit,{headers: { 'token': this.props.user._lat }} )
      .then( res => {
        console.log('success!')
        this.props.history.goBack()
      } )
      .catch( err => {
        console.log('ERROR!')
      } )
  }

  addIngredient = (ingredient) => {
   this.setState({ ingredients: ingredient  }) 
  }

  render() {
    return(
      <Wrapper>
        <Section small>
          <Title>
            Create Meal
          </Title>
          <CreateMeal
            handleChange= { this.handleChange }
            image={this.state.img_url}
            add= { this.addIngredient } 
            handleSubmit= { this.handleSubmit }
          />
        </Section>
        {
          /*
        <span onClick={() => this.setState(prevState => ({hidePreview: !prevState.hidePreview}))}>Preview</span>
            * */
        }
        <Section hide={this.state.hidePreview}>
          <Title>
            Preview
          </Title>
          <Recipe preview= { this.state }/>
        </Section>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({ user: state.loginReducer.user })
export default connect(mapStateToProps, null)(Meal)
