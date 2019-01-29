import React, { Component } from 'react'
import { fetchCredentials } from '../../actions/loginActions'
import { connect } from 'react-redux'

class Navbar extends Component {
  onLogin = () => {
   fetchCredentials() 
    console.log('fetchCredentials')
  }
  render(){
    console.log(this.props.state)
    return <span onClick={ this.onLogin }>Login</span>
  }
}

const mapStateToProps = state => ({ state: state.loginReducer })
const mapDispatchToProps = dispatch => ({
  dispatch: () => ({
    fetchCredentials: () => {
      dispatch( fetchCredentials() )
    }
  })
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
