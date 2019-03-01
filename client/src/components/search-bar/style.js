import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1 1 auto;
  position: relative;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
`

export const SuggestList = styled.ul`
  list-style-type: none;
  position: absolute;
  font-size: 4em;
  margin: 0;
  margin-top: calc(1em + 10px);
  padding: 0;
  width: 100%;
  max-height: 4em;
  overflow-y: auto;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.5);
`

export const Suggest = styled.li`
  display: flex;
  background: white; 
  padding: 5px;
  cursor: pointer;
  background: ${ props => props.hover ? 'white' : '#ccdee8'};
  border: 1px solid #ccdee8;
`

export const Icon = styled.img`
  align-self: center;
  margin-left: auto;
  margin-right: 5px;
  height: 0.9em;
`

export const ContentBar = styled.div`
  border: 1px solid #ccdee8;
  background: white;
  display: flex;
`
export const Search = styled.input`
  apparence: none;
  border: none;
  font-size: 4em;
  background: white;
  background: ${ props => props.selected ? 'white' : '#ccdee8'};
  width: 80%;
`

export const CreateButton = styled(NavLink)`
  text-decoration: none; 
  color: black;
  text-align: center;
  align-items: center;
  display: ${ props => props.shouldhide ? 'none' : 'flex' }
  background: rgba(0, 0, 0, 0);
  width: 20%;
  font-size: 1.25em;

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
