import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ContentBar,  Search, Wrapper, Suggest, SuggestList, CreateButton, Icon } from './style'
import { fetchIngredient, clearSuggestions, selectIngredient } from '../../actions/searchActions'
import CreateIngredient from '../createIngredient'
//import { add } from '../../actions/filterActions'

class SearchBar extends Component {
  state = {
    hide: true,
    ingredient: ''
  }

  handleChange = ( e ) => {
    let ingredient = (e.target.value).replace(/[^a-z0-9]*$/gi, '') 
    this.setState({ ingredient: ingredient })
    if(ingredient.length > 0){
      this.props.fetchIngredient(ingredient)

      if(this.props.state.ingredients[0].name !== ingredient){
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

  showResult = () => {
    if(this.props.state.ingredients[0].name !== ''){

     return this.props.state.ingredients.map( ingredient => {
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
      this.props.add( this.state.ingredient )

    }
  }

  render(){
    return(
      <Wrapper>
        <ContentBar>
          <Search
            autoFocus
            selected
            onChange={ this.handleChange }
            //onKeyPress={ this.handleEnter }
            value= {this.state.ingredient}
            placeholder='ingredients...'
          />
          <CreateButton
            shouldhide={ this.state.hide }
            to={{ pathname:'/ingredients', state:{ingredient: this.state.ingredient }}}
          >
              Create this new ingredient
          </CreateButton>
        </ContentBar>
        <SuggestList>
          { this.showResult() }
        </SuggestList>
      </Wrapper>
    )
  }
}

const mapStateToProps = state => ({ state: state.searchReducer })

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
