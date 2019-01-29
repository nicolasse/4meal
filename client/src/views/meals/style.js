import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  font-size: 12px;
`

export const Section = styled.section`
  border: 1px solid grey;
  padding: 1em;
  background: rgba(255, 255, 255, 0.7);
  ${ props => props.small ? 'flex: 1 1' :  'flex: 2 1' };
  margin: 0 1rem 0 1rem;

`

export const Title = styled.h1`
  
`
