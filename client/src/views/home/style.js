import styled from 'styled-components'
import { device } from '../../device.js'
import { NavLink } from 'react-router-dom'
const img = require('../../images/tmg-slideshow_l.jpg')

export const Background = styled.img.attrs({src: img})`
  position: absolute;
  z-index: 0;
  height: 25vh;
  width: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  object-fit: cover;
`

export const FilterSection = styled.section`
  height: 60px;
  display: flex;
  justify-content: center;
  top: 0;
  position: sticky;
  background: white;
  z-index: 99999;
`

export const RecipeSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
`

export const Section = styled.section`
  display: flex;
  justify-content: center;
  @media ${device.laptop}{
    margin: 0 1em 0 1em;
  }
`

export const SearchSection = styled.div`
  margin-bottom: 2em;
  display: flex;
  flex:1;
  justify-content: center;
`

export const Wrapper = styled.div`
  height: 110%;
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`

export const Main = styled.div`
  display: flex;
  flex-flow: row wrap
  flex: 66%;
  padding: 0 2em;
  margin-top: 5em;
  justify-content: center;
`

export const Title = styled.span`

`
export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: ${props => props.move === 'up' ? 0 : '3em'};
`

