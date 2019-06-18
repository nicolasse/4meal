import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  height: 200px;
  opacity: ${props => props.changeOpacity ? '0.8': '1'};
  transition: all ease-out 0.5s;
  z-index: 1;
  margin-left: 20px;
  width: ${props => props.loaded ? '170px': '0px'};
  &:hover {
    transform: scale(1.1);
    z-index: 999;
  }
`
export const Meal = styled.div`
  text-decoration: none;
  position: relative;
  color: black;
  display: flex;
  margin-top: 0;
  outline: none;
`


export const LackList = styled.ul`
  list-style: none;
  padding: 0;
  min-width: 20px;
  display: flex;
  flex-flow: column nowrap;
`
export const LackIngredient = styled.li`
  flex: 1 1 auto ;
  max-height: 25%;

`

export const IconList = styled.img`
  cursor: pointer;
  object-fit: cover;
  flex: 1 1 auto;
  height: 100%;
  width: 20px;
  transition: all ease-out 100ms;
  &:hover{
    z-index: 999;
    border-radius: 50%;
    height: 40px;
    width: 40px;
    transform:scale(2);
  }
`

export const Info = styled.div`
  visibility: ${props => props.showDescription ? 'visible' : 'hidden'};
  opacity: ${props => props.showDescription ? 1 : 0};
  padding: ${props => props.showDescription ? '1em': '0em'};
  width: ${props => props.showDescription ? '100%': '0em'};
  transition: all ease-in 300ms;
  flex-direction: column;
  flex: 1;
  border: 1px solid grey;
  border-top-right-radius: 20px;
  z-index: 999;
  justify-content: center;
  background: white;
  text-align: end;
`

export const Preview = styled.div`
  display: flex;
  width: 150px;
  width: 100%;
  &:hover{
    width: 150%;
  }
`

export const Description = styled.p`
  text-align: end;
  font-size: 10px;
  justify-self: center;
  overflow-x:visible;
  overflow-y:hidden;
`
export const MealImg = styled.img`
  object-fit: cover;
  height: 200px;
  transition: all ease-out 400ms;
  max-width: ${props => props.loaded ? '150px': '0px'};
  &:hover{
    width: 150%;
  }
`
