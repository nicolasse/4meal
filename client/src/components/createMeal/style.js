import styled from 'styled-components'

export const Wrapper = styled.section`
 width: 100%; 
`
export const Create = styled.input.attrs({type: 'submit'})`
  text-decoration: none;
  border: none;
  border-radius: 3px;
  font-size: 2em;
  border-radius: 1px solid black;
  background: #58fc5d;
  &:hover{
    background: #009cde;
    color: white;
  }
  justify-self: end;
  margin: 1em;
`
export const Add = styled.span`
  cursor: pointer;
  text-decoration: none;
  border: none;
  border-radius: 3px;
  font-size: 2em;
  border-radius: 1px solid black;
  background: #58fc5d;
  &:hover{
    background: #009cde;
    color: white;
  }
  justify-self: end;
  margin: 1em;
`

export const Select = styled.select`
  border: 1px solid gey;
  background: white;
  height: 2em;
  
`
export const Textarea = styled.textarea`
  font-size: 1.5em;
  width: 100%;
  min-height: 100px;
  resize: none;
  border: 1px solid grey;
`

export const AddIngredient = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  border: 1px solid grey;
  padding: 1em;
  align-items: center;
`
export const AddDirections = styled(AddIngredient)`

`

export const Ingredient = styled.div`
  display: flex;
  flex: 100%;
  font-size: 4em;
  border: 1px solid grey;
  background: white;
`
export const Icon = styled.img`
  align-self: center;
  margin-left: auto;
  margin-right: 5px;
  height: 0.9em;
`
