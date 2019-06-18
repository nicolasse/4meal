import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Section = styled.section`
  background: rgba(255, 255, 255, 0.7);
  flex: ${props => props.small ? 2 : 3};
  margin: 0 1rem 0 1rem;
  transition: all ease-in 1s;
  border: ${props => props.small ? 'none' : '1px solide grey'};
  border-radius: 50px;
`

export const Title = styled.h1`
  
`
