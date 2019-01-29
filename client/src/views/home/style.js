import styled from 'styled-components'
import { device } from '../../device.js'
//let img = require('../../images/tmg-slideshow_l.jpg')

export const Section = styled.section`
  background: rgba(255,255,255, 0.7);
  @media ${ device.mobileS }{
    flex: 100%;

  }
  @media ${device.laptop}{
    ${ props => props.ingredients ? 'flex: 1 1' : 'flex: 2 0' } 
    height: 297px;
    margin: 0 1em 0 1em;

  }
`

export const SearchSection = styled.div`
  flex: 0 1 50%;
`

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 100vh;
  justify-content: center;


`

export const Main = styled.div`
  display: flex;
  flex-flow: row wrap
  flex: 66%;
  padding: 2em;
`
