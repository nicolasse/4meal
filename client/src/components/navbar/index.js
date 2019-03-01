import React, { Component } from 'react'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'

function Navbar(props) {
  let {pathname} = props.location
  return (
    <Wrapper>
      <Nav>
        <Link 
          current={pathname === '/'}
          to={ '/' }
        >
          Home
        </Link>
        <Link 
          current={pathname === '/meals'}
          to={ '/meals' }
        >
          New Meal +
        </Link>
        <Link
          current={pathname === '/ingredients'}
          to={ '/ingredients' }
        >
          New Ingredient +
        </Link>
      </Nav>
    </Wrapper>
  )
}

const Link = styled(NavLink)`
  margin-top: 3em;
  text-decoration: none;
  color: black;
  ${props => props.current ? 'text-decoration: underline' : null}

`
const Wrapper = styled.section`
  width: 500px;
  margin-bottom: 2em;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
`

export default withRouter(Navbar)
