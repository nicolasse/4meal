import React, { useEffect, useState } from 'react'
import {
  Bar,
  Li,
  Number,
  Info,
  Header,
  Wrapper,
  Title,
  Image,
  Description,
  Ingredients,
  IngredientButton,
  CreatedBy,
  ProfileImage,
  User,
  Directions,
  List
} from './style'
import {connect} from 'react-redux'
import { fetchRecipeById } from '../../actions/searchActions'
import { add } from '../../actions/filterActions'


function Recipe(props){
  const [ loadingImage , setLoading ] = useState(false)
  const [img, setImg] = useState('')

  useEffect(() => {
    if(props.id){
      props.fetchRecipeById( props.id )
      setLoading(true)
    }
    setTimeout(() => {
      setLoading(false)
      if(props.scroll)
        window.scroll({top: 500, behavior: 'smooth'})
    }, 300)
  }, [props.id])

  let recipes = props.preview || props.recipe
  const showIngredients = (ingredients) =>
  {
    return ingredients.map( ingredient =>
    {
      return (
        <li>
          {
            ingredient.amount
            + ' ' +
            ingredient.measure
            + ' ' 
          }
          <IngredientButton onClick={() =>{ props.add(ingredient.nameId)}}>{ingredient.nameId.name}</IngredientButton>
        </li>
      )
    })
  }

  if(props.id === null)
      return null
    else
    return(
      <Wrapper id='recipe'>
        <Bar />
          <Info>
            <h1>{ recipes.name }</h1>

          </Info>
        <Header>
            <Description>
              <Image
                src={ recipes.img_url }
                loading={ loadingImage }
                onLoad={() =>{
                  setImg(recipes.img_url);
                  setLoading(false);
                }}
                onError = {(e) => {
                  e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png'
                  e.target.error = false 
                }

                }
              />
          <span> { '"' + recipes.description + '"' }</span>
            </Description>
            <Ingredients>
          Ingredients
          <ul>
            { recipes.ingredients ? showIngredients(recipes.ingredients): null }
          </ul>
            </Ingredients>
        </Header>
        <Directions> 
          Directions:
          {
            recipes.directions 
              ?  <List>{recipes.directions.map( (step, index) => {
                return <Li><Number>{index + 1}</Number>{step}</Li> } )
              }</List> 
              : null
          }

          {
            recipes.created_by ?
            <CreatedBy>
              <User>{recipes.created_by.name}</User>
              <ProfileImage src={recipes.created_by.photoURL}/>
            </CreatedBy>
              :null
          }
          
        </Directions> 
      </Wrapper>
    )
}
const mapStateToProps = ( state ) => ({
  recipe: state.searchReducer.recipe,
  loading: state.searchReducer.loadingRecipe
})
const mapDispatchToProps =  dispatch  => ({
  fetchRecipeById: (id) => {
    dispatch( fetchRecipeById(id) )
  },
  add: (ingredient) => {
    dispatch(add(ingredient))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Recipe)
