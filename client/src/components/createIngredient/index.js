import React, { Component } from 'react'
import { Wrapper, CreateButton, CancelButton, Preview } from './style'
import { Input } from '../commons/style'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { SuggestList, Suggest, Icon } from '../search-bar/style'

class CreateIngredient extends Component {
  state = {
    name: '',
    img_url: ' '
  }

  componentDidMount(){
    this.setState({
      name: this.props.newIngredient,
      img_url: 'https://yourlighterside.com/wp-content/uploads/2012/09/Low-Carb.jpg' 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    axios.post('/api/ingredients', this.state )
      .then( res => {
        console.log('success!')
        this.props.history.goBack()

      } )
      .catch( err => {
        console.log('ERROR!')
      } )
  }

  handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState({ [name] : value })
  }

  handleCancel = () => {
    this.props.history.goBack()
  }

  render(){
    return(
      <Wrapper>
        <form onSubmit= {this.handleSubmit}>
          ingredient
          <Input
            onChange={ this.handleChange }
            name='name'
            placeholder='name' 
            defaultValue={ this.props.newIngredient }
            required
          />
          link of the image
          <Input onChange={ this.handleChange }
            name='img_url'
            placeholder='image url'
            required
          />
          <CancelButton onClick={ this.handleCancel }>Cancel</CancelButton>
          <CreateButton value='Create' />
        </form>
        <Preview>
        <SuggestList>
          <Suggest>{ this.state.name }<Icon src={this.state.img_url} /></Suggest>
        </SuggestList>
        </Preview>
      </Wrapper>
    )
  }
}

export default withRouter(CreateIngredient)
