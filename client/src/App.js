import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Content, BackgroundImg } from './style'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import FilterIngredients from './components/filterIngredients'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './views/home'
import Ingredients from './views/ingredients'
import CreateMeal from './views/createMeal'
import ShowMeal from './views/showMeal'
import Recipe from './components/recipe'
import Navbar from './components/navbar'

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <Router>
      <Content>
      <Navbar />
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/ingredients' component={ Ingredients } />
            <Route exact path='/meals' component={ CreateMeal } />
            <Route path='/meals/:id' render={({ match }) => (<ShowMeal id={ match.params.id }/> )}/>
          </Switch>
      </Content>
      </Router>
      </Provider>

    );
  }
}

export default App;
