import styled from 'styled-components'

export const Wrapper = styled.div`
`

export const RemoveHover = styled.div`
  flex: 1;
  background: rgba(0,0,0,0)
  font-size: 2em;
  z-index: 1;
  position: absolute;
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
  font-size: 20px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-flow: ${props => props.column ? 'column nowrap' : 'row nowrap'};
  margin-top:10px;
`
export const Ingredient = styled.span`
  padding: 5px;
  border-bottom: none;
  box-sizing: border-box;
  cursor: pointer;
  background: white;
  &:hover{
    text-decoration: line-through;

  }
`
export const Item = styled.div`
  display: flex;
  transition: all ease-out 200ms;
  padding-top: 0;
  margin: 0 20px;
  &:hover {
    padding-top: 10px;
  }

`

export const Li = styled.li`
  align-self: start;
`

export const Icon = styled.img`
  align-self: center;
  height: 1em;
  width: 1em;
  border-radius: 0.5em;
  transition: all ease-out 200ms;
  object-fit: cover;
  &:hover {
    z-index: 1;
    transform:scale(3);
  }
`
