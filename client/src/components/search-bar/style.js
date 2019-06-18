import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
  width: 500px;

`

export const SuggestList = styled.ul`
  max-height: 0;
  transition: max-height 200ms ease-out;
  list-style-type: none;
  position: absolute;
  font-size: 2em;
  margin: 0;
  margin-top: calc(1em + 8px);
  padding: 0;
  width: 500px;
  ${props => props.shouldHide ? 'max-height: 0' : 'max-height: 4em'};
  overflow-y: auto;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
  z-index: 999999;
  overscroll-behavior: contain;
`

export const Suggest = styled.li`
  display: flex;
  background: white; 
  padding: 5px;
  cursor: pointer;
  background: ${ props => props.hover ? 'white' : '#b6b6b6'};
  border: 1px solid #b6b6b6;
  border-top: none;
`

export const Icon = styled.img`
  align-self: center;
  margin-left: auto;
  margin-right: 5px;
  height: 1em;
  width: 1em;
  border-radius: 0.5em;
  object-fit: cover;
`

export const ContentBar = styled.div`
  border: 1px solid #b6b6b6;
  background: white;
  display: flex;
  width: 100%;
`
export const Search = styled.input`
  apparence: none;
  border: none;
  font-size: 2em;
  background: white;
  background: ${ props => props.selected ? 'white' : '#ccdee8'};
  width: 80%;
  outline: none;
`

export const CreateButton = styled(NavLink)`
  text-decoration: none; 
  color: black;
  text-align: center;
  align-items: center;
  display: ${ props => props.shouldhide ? 'none' : 'flex' }
  background: rgba(0, 0, 0, 0);
  width: 20%;
  font-size: 1em;

`

export const IngredientsList = styled.div`
  display: flex;
  flex-flow: row nowrap;
`
export const Ingredient = styled.span`
  border: none;
  background: #aaacaf;
  color: white;
  border-radius: 5px;
`
