import styled from 'styled-components'
import { Ingredient, List, Icon } from '../filterIngredients/style' 


export const MealList = styled.ul`
  display: flex; 
  flex-flow: ${props => props.column ? 'column nowrap' : 'row nowrap'};
  list-style: none;
  width: 90vw;
  overflow: hidden;
  padding-left: 20px;
  position: relative;
  height: ${props => props.hide ? '0px': '300px'};
  transition: all ease-out 200ms;
  z-index: 9999;
  align-items: end;
  padding-bottom: ${props => props.hide ? '0' : '2em'};
`

export const Right = styled.div`
  position: absolute
  z-index: 999;
  opacity: 0;
  background: grey;
  width: 100px;
  height: 200px;
  right: -40px;

`
export const Left = styled(Right)`
  left: -40px;
`
export const  ItemList = styled.li`
  height: 200px;
  transition: all ease-in 100ms;
  margin-right: ${props => props.right +'px'};
  margin-left: ${props => '-'+props.right +'px'};
  padding-left: 20px;
`

export const Wrapper = styled.div`
  display: flex;
  flex: 1 0 100%;
  height: 4em;
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
