import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 500px;
  min-height: 500px;
  padding: 2em;
  margin-top: 4em;
  background: rgba(255,255,255, 0.7);
`


export const CancelButton = styled.button`
  cursor: pointer;
  text-decoration: none;
  border: none;
  border-radius: 3px;
  font-size: 1.5em;
  border-radius: 1px solid black;
  background: #fff95b;
  &:hover{
    background: #009cde;
    color: white;
  }
  justify-self: end;
  margin: 1em;

`

export const CreateButton = styled.input.attrs({type: 'submit'})`
  cursor: pointer;
  text-decoration: none;
  border: none;
  border-radius: 3px;
  font-size: 1.5em;
  border-radius: 1px solid black;
  background: #58fc5d;
  &:hover{
    background: #009cde;
    color: white;
  }
  justify-self: end;
  margin: 1em;
`

export const Preview = styled.div`
  flex: 1 1 auto;
  position: relative;
`
