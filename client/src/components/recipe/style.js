import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  font-size: 16px;
`

export const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: strech;
`

export const Info = styled.div`
  justify-content: center;
  flex: 4;
`

export const Title = styled.h1`

`

export const Image = styled.img`
  max-height: 250px;
  object-fit: scale-down;
  flex: 1;
  margin: 0 2em 2em 0;
`

export const Description = styled.div`
  background: white;
  margin: 1em;
  font-style: italic;
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
`

