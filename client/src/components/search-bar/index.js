import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ContentBar,
  Search,
  Wrapper,
  Suggest,
  SuggestList,
  CreateButton,
  Icon } from './style'
import {
  fetchIngredient,
  clearSuggestions,
  selectIngredient
} from '../../actions/searchActions'
import CreateIngredient from '../createIngredient'
import defaultImg from '../../default.jpg'
import { add } from '../../actions/filterActions'


class SearchBar extends Component {
  state = {
    hide: true,
    ingredient: '',
    resultLength: 0,
    selectIndex: -1,
  }

  handleChange = ( e ) => {
    let ingredient = e.target.value //(e.target.value).replace(/[^a-z0-9]*$/gi, '') 
    this.setState({ ingredient: ingredient, selectIndex: -1 })
    if(ingredient.length > 0){
      this.props.fetchIngredient(ingredient)

      if(this.props.ingredients.length > 1 && this.props.ingredients[0].name !== ingredient){
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
    if(this.props.addOnCreate)
    this.props.addOnCreate(ingredient)
    else
    this.props.add(ingredient)
    this.props.clearSuggestions()
    this.setState({ ingredient: '' })
  }
  
  handleKeyPress = (event)  => {
    if(this.props.ingredients.length >= 1){

    if(event.keyCode === 40 && this.state.selectIndex < this.props.ingredients.length -1){
      this.setState(prevState => ({ selectIndex: prevState.selectIndex + 1 }),() => {
        // this.refs[this.state.selectIndex].parentNode.scrollTop = this.refs[this.state.selectIndex - 2].offsetTop        
                this.refs[this.state.selectIndex].scrollIntoView({block: 'end', behavior: 'smooth', inline: 'start'});
        this.props.selectIngredient( this.props.ingredients[this.state.selectIndex]._id )
      })


    }
    if( event.keyCode === 38 && this.state.selectIndex > 0){
      this.setState(prevState => ({ selectIndex: prevState.selectIndex - 1 }),() => {
        //        this.refs[this.state.selectIndex].parentNode.scrollTop = this.refs[this.state.selectIndex].offsetTop - this.refs[this.state.selectIndex].parentNode.scrollTop
           this.refs[this.state.selectIndex].scrollIntoView({block: 'start', behavior: 'smooth', inline: 'end'});
        this.props.selectIngredient( this.props.ingredients[this.state.selectIndex]._id )
      })
    }


  }}

  showResult = () => {
    if(this.props.ingredients.length >= 1){
      let length = this.props.ingredients.length

     return this.props.ingredients.map( (ingredient, i) => {
      return( 
         <Suggest
            ref={i}
            key={ingredient._id}
            onClick={ () => this.handleClickOnList(ingredient) }
            hover= { ingredient.hover }
            onMouseEnter = { () => this.props.selectIngredient(ingredient._id) }
            onMouseLeave = { () => this.props.selectIngredient()}
         >
           { ingredient.name }
           <Icon
             src={ingredient.img_url}
             onError={(e) => {e.target.onerror = null;  e.target.src = defaultImg}}
           />
         </Suggest>)
    } )
    }
  }

  handleEnter = (e) => {
    let ingredientIndex = this.state.selectIndex
    if(e.key === 'Enter' && ingredientIndex >= 0  ){
      let ingredientToAdd = this.props.ingredients[ingredientIndex]
      ingredientToAdd.name != '' && this.props.add( this.props.ingredients[ingredientIndex] )
      if (this.props.addOnCreate)this.props.addOnCreate(this.props.ingredients[ingredientIndex])
      this.setState({selectIndex : -1})
      this.props.clearSuggestions()
      this.setState({ ingredient: '' })

    }
  }

  render(){
    return(
      <Wrapper >
        <ContentBar>
          <Search
            autoFocus={ this.props.autoFocus === false ? false : true }
            selected
            onChange={ this.handleChange }
            onKeyUp = { this.handleKeyPress }
            onKeyPress={ this.handleEnter }
            value= {this.state.ingredient}
            placeholder='egg ;)'
          />
          <CreateButton 
            shouldhide= {this.state.hide}
            to={
              { pathname: '/ingredients',
                state:{name: this.state.ingredient}
              }
            }>
          Create this ingredient
          </CreateButton>
        </ContentBar>
        <SuggestList shouldHide={this.state.ingredient === ''}>
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
  add: ( ingredient ) => {
    dispatch( add(ingredient) )
  },

})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
