import styled from 'styled-components'
let img = require('./images/tmg-slideshow_l.jpg')

export const Content = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: static;
`
