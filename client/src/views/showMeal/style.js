import styled from 'styled-components'

export const Wrapper = styled.section`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`

export const Col = styled.div`
  flex-flow: column nowrap;
  flex: ${props => props.small ? '1' : '3 0'};
  flex-srink: auto;
  margin-right: 10%;
  justify-content: center;

`

export const Main = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
`
