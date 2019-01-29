import styled from 'styled-components'

export const ImageHead = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  z-index: 1;
  filter: blur(1px)
`
export const TextHead = styled.h1`
  color: white;
  z-index: 2;
  font-size: 4em;
  position: relative;
  text-align: center;
  width: 100%;
`
export const Wrapper = styled.div`
  flex: 1 0 auto;
  height: 30vh;
  max-height: 30vh;

`

