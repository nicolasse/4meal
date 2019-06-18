import styled from 'styled-components'

export const Wrapper = styled.section`
  width: 500px;
  min-height: 500px;
  padding: 2em;
  margin-top: 4em;
  background: rgba(255,255,255, 0.7);
  overscroll-behavior: none;
`
export const FormContent = styled.div`
  padding: 1em;
  background: white;
  display: flex;
  flex-flow: column nowrap;
`

export const Create = styled.span`
  cursor: pointer;
  padding: 0 10px;
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
  display: flex;
  text-decoration: none;
  border: none;
  border-radius: 3px;
  font-size: 1em;
  border-radius: 1px solid black;
  background: #58fc5d;
  &:hover{
    background: #009cde;
    color: white;
  }
  justify-self: end;
  align-items: center;
  margin: 1em;
  padding: 0 0.5em;
`

export const Cancel = styled(Add)`
  background: #fff95b;

`

export const Select = styled.select`
  border: 1px solid gey;
  background: white;
  height: 2em;
  align-self: center;
  
`
export const Textarea = styled.textarea`
  font-size: 1.5em;
  width: 500px;
  resize: none;
  border: 1px solid;
`

export const AddIngredient = styled.div`
  display: flex;
  flex-flow: row wrap;
`
export const AddDirections = styled(AddIngredient)`

`

export const Ingredient = styled.div`
  display: flex;
  width: 400px;
  font-size: 2em;
  background: white;
`
export const Icon = styled.img`
  align-self: center;
  margin-left: 1em;
  height: 1em;
  width: 1em;
  border-radius: 0.5em;
`
