import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
`

export const Description = styled.div`
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

export const List = styled.ul`
  list-style-type: none;
  font-size: 3.5em;
  margin: 0;
  padding: 0;
  flex: 1 0;
`
export const Ingredient = styled.li`
  display: flex;
  padding: 5px;
  border: 1px solid #ccdee8;
  border-bottom: none;
  &:last-child {
    border-bottom: 1px solid #ccdee8;
  }
`

export const Icon = styled.img`
  align-self: center;
  margin-left: auto;
  margin-right: 5px;
  height: 0.9em;
  flex: 0 1;
`
