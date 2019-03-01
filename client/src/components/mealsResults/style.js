import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Ingredient, List, Icon } from '../filterIngredients/style' 

export const MealIcon = styled(Icon)`
  object-fit: scale-down;
  flex: 1;
  height: 2em;
`
export const MealList = styled(List)`
`
export const Meal = styled(NavLink)`
  ${ Ingredient };
  text-decoration: none;
  color: black;
  display: flex;
  background: white;
  margin-bottom: 5px;
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex: 4;
`
export const Wrapper = styled.div`
  display: flex;
  flex: 1 0 100%;
  height: 4em;
`

export const Description = styled.p`
  font-size: 20px;
  flex: 1;
`

export const Img = styled.img`
  height: 4em;
`

export const Remove = styled.span`
  margin-left: 0.5em;
  color: #505050;
  cursor: pointer;
`

export const IngredientFilter = styled.span`
  border-radius: 0.5em;
  padding: 0.25em 0.5em;
  background: grey;
  color: white;
  margin-right: 1em;
`
