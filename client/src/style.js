import styled from 'styled-components'
import { device } from './device.js'

export const Content = styled.section`
  max-width: 1600px;
  margin: 0 auto;
`

export const SearchSection = styled.section`
  margin-bottom: 2em;
  display: flex;
  flex:1;
  justify-content: center;
`




export const FilterSection = styled.section`
  max-height: 50px;
  display: flex;
  justify-content: center;
`

export const Section = styled.section`
  display: flex;
  flex: 100%;
  justify-content: center;
  @media ${device.laptop}{
  }
`

