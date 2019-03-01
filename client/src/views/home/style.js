import styled from 'styled-components'
import { device } from '../../device.js'
import { NavLink } from 'react-router-dom'
//let img = require('../../images/tmg-slideshow_l.jpg')

export const Section = styled.section`
  background: rgba(255,255,255, 0.7);
  @media ${ device.mobileS }{
    flex: 100%;

  }
  @media ${device.laptop}{
    ${ props => props.ingredients ? 'flex: 1 1' : 'flex: 2 0' } 
    margin: 0 1em 0 1em;
    overflow-y: auto;
  }
`

export const SearchSection = styled.div`
  flex: 0 1 50%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  margin-top: 5%;
`

export const Main = styled.div`
  display: flex;
  flex-flow: row wrap
  flex: 66%;
  padding: 0 2em;
  margin-top: 3em;
`

export const CreateMeal = styled(NavLink)`
  text-decoration: none;
  color: black;
`
