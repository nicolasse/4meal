import React, {useState,useEffect} from 'react'
import styled from 'styled-components'
import { NavLink, withRouter } from 'react-router-dom'
import { logged, logout } from '../../actions/loginActions'
import { connect } from 'react-redux'
import { provider, auth } from '../../auth'
import axios from 'axios'

function Navbar(props) {
  const [ user, setUser ] = useState()
  let {pathname} = props.location

  const handleLogin = () => {
    auth().signInWithPopup(provider)
      .then((res) =>{
        props.logged(res);
        auth().currentUser.getIdToken(true).then(idToken =>{
          axios.get('/api/auth', { headers: { token: idToken  }  })
            .then(r => console.log('va'))
            .catch(e => console.log('no va'))

        } )

      })
  }
  const handleLogout = () => {
    auth().signOut().then(() => props.logout())
  }
  const clicked = () => {
    console.log(auth().currentUser)
    try{
        auth().currentUser.getIdToken(true).then(idToken =>{
          console.log(idToken)
        } )

    }catch(e){
      console.log(e)
    }
    
  }

  auth().onAuthStateChanged((theuser) =>{
    if(theuser){
      setUser(theuser)
      props.logged(theuser)
    }
    else
      setUser()
  })
  return auth().currentUser ?
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
              <LogSection>
                <Button onClick={handleLogout}>Logout</Button>
                <ProfileImg  src={user.photoURL}/>
              </LogSection>
            </Nav>
      </Wrapper>
  :
            <Nav>
              <Link 
                current={pathname === '/'}
                to={ '/' }
              >
                Home
              </Link>
              <Link
                current={pathname === '/ingredients'}
                to={ '/ingredients' }
              >
                New Ingredient +
              </Link>
              <LogSection>
                <Button onClick={handleLogin}>Login</Button>
              </LogSection>
            </Nav>
  
}

const LogSection = styled.div`
  margin-left: auto;
  margin-right: 2em;
  
`

const ProfileImg = styled.img`
  height: 2em;
  border-radius: 1em;
  margin: 0 2em;
`
const Link = styled(NavLink)`
  text-decoration: none;
  color: black;
  ${props => props.current ? 'text-decoration: underline' : null};
  margin:  0 2em;
  transition: color 200ms ease-out;
  &:hover{
    color: grey;
  }

`
const Button = styled.span`
  cursor: pointer;
  text-decoration: none;
  color: black;
  
`
const Wrapper = styled.section`
  width: 100%;
`

const Nav = styled.nav`
  display: flex;
  height: 100px;
  align-items: center;
`

const mapDispatchToProps = dispatch => ({
  logged: (user) => {
    dispatch(logged(user))
  },
  logout: () => {
    dispatch(logout())
  }
})
export default withRouter(connect(null, mapDispatchToProps)(Navbar))
