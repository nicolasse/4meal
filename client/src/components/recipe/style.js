import styled from 'styled-components'

export const Bar = styled.div`
  width: 80%;
  border-bottom: 2px solid #f0f0f0;
`

export const CreatedBy = styled.div`
  align-self: end;
  display: flex;
`

export const ProfileImage = styled.img`
  height: 2em;
  width: 2em;
  border-radius: 50%;
  margin-left: 1em;
`

export const User = styled.span`
  align-self: end;
`

export const Wrapper = styled.div`
  display: flex;
  font-size: 16px;
  flex-flow: column wrap;
  justify-content: center;
  min-height: 600px;
  width: 100%;
  align-items: center;
`

export const Header = styled.div`
  display: flex;
  flex: 2;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: start;
  margin-bottom: 2em;
`

export const Directions = styled.section`
  background: #f0f0f0;
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 100px;
  padding: 2em;
`

export const List = styled.ul`
  padding: 0;
  width: 500px;

`
export const Info = styled.div`
  justify-content: center;
  font-size: 30px;
  text-align: start;
`

export const Title = styled.h1`

`

export const Image = styled.img`
  object-fit: cover;
  max-height: ${props => props.loading ? '0': '300px'};
  transition: all ease-out 200ms;
  border-radius: 20px;
  
`
export const Ingredients = styled.section`
  margin-left: 2em;
  flex: 70%;
  
`

export const IngredientButton = styled.span`
  text-decoration: underline;
  cursor: pointer;
`

export const Description = styled.div`
  background: white;
  font-style: italic;
  display: flex;
  flex-flow: column nowrap;
  flex: 30%;
  align-items: center;
`

export const Number = styled.span`
  display: flex;
  border: 2px solid grey;
  color: grey;
  justify-content: center;
  align-items: center;
  padding: 1em;
  margin-right: 1em;
  height: 20px;
  width: 20px;
  border-radius: 20px;
  
`
export const Li = styled.li`
  list-style: none;
  display: flex;
  margin: 1em;
  align-items: center;
  max-width: 800px;
`

