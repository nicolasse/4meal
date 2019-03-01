import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ContentBar,  Search, Wrapper, Suggest, SuggestList, CreateButton, Icon } from './style'
import { fetchIngredient, clearSuggestions, selectIngredient } from '../../actions/searchActions'
import CreateIngredient from '../createIngredient'

class SearchBar extends Component {
  state = {
    hide: true,
    ingredient: '',
    resultLength: 0,
    selectIndex: -1,
  }

  handleChange = ( e ) => {
    let ingredient = (e.target.value).replace(/[^a-z0-9]*$/gi, '') 
    this.setState({ ingredient: ingredient, selectIndex: -1 })
    if(ingredient.length > 0){
      this.props.fetchIngredient(ingredient)

      if(this.props.ingredients[0].name !== ingredient){
        this.setState({ hide: false })
      }
      else{
        this.setState({ hide: true })
      }
    }
    else {
      this.setState({hide: true})
      this.props.clearSuggestions()
      
    }
  }

  handleClickOnList = (ingredient) => {
    this.props.add(ingredient)
    this.props.clearSuggestions()
    this.setState({ ingredient: '' })
  }

  handleKeyPress = (event)  => {
    if(event.keyCode === 40 && this.state.selectIndex < this.props.ingredients.length -1){
      this.setState(prevState => ({ selectIndex: prevState.selectIndex + 1 }),() => {
        this.props.selectIngredient( this.props.ingredients[this.state.selectIndex]._id )
      })


    }
    if( event.keyCode === 38 && this.state.selectIndex > 0){
      this.setState(prevState => ({ selectIndex: prevState.selectIndex - 1 }),() => {
        this.props.selectIngredient( this.props.ingredients[this.state.selectIndex]._id )
      })
    }

  }

  showResult = () => {
    if(this.props.ingredients[0].name !== ''){
      let length = this.props.ingredients.length

     return this.props.ingredients.map( ingredient => {
      return( 
         <Suggest
            key={ingredient._id}
            onClick={ () => this.handleClickOnList(ingredient) }
            hover= { ingredient.hover }
            onMouseEnter = { () => this.props.selectIngredient(ingredient._id) }
            onMouseLeave = { () => this.props.selectIngredient()}
         >
           { ingredient.name }
           <Icon src={ingredient.img_url}/>
         </Suggest>)
    } )
    }
  }

  handleEnter = (e) => {
    if(e.key === 'Enter'){
      this.props.add( this.props.ingredients[this.state.selectIndex] )
      this.props.clearSuggestions()
      this.setState({ ingredient: '' })

    }
  }

  render(){
    return(
      <Wrapper>
        <ContentBar>
          <Search
            autoFocus={ this.props.autoFocus }
            selected
            onChange={ this.handleChange }
            onKeyUp = { this.handleKeyPress }
            onKeyPress={ this.handleEnter }
            value= {this.state.ingredient}
            placeholder='ingredients...'
          />
        </ContentBar>
        <SuggestList>
          { this.showResult() }
        </SuggestList>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({ ingredients: state.searchReducer.ingredients })

const mapDispatchToProps = dispatch => ({
  fetchIngredient: ( ingredient )=>{
    dispatch( fetchIngredient( ingredient ) )
  },
  clearSuggestions: () => {
    dispatch( clearSuggestions() )
  },
  selectIngredient: (id) => {
    dispatch( selectIngredient(id) )
  },

})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
