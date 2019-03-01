import styled from 'styled-components'
let img = require('./images/tmg-slideshow_l.jpg')

export const Content = styled.section`
  height: 100%;
`

export const BackgroundImg = styled.div`
  min-height: 100vh;
  box-sizing: border-box;
  background-image: url(${img});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: absolute;
  z-index: 2;
  
`
