import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Content } from './style'
import { Provider } from 'react-redux'
import configureStore from './store/configureStore'
import FilterIngredients from './components/filterIngredients'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import Home from './views/home'
import Ingredients from './views/ingredients'
import Meals from './views/meals'

const store = configureStore()
class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <Content>
        <Router>
          <Switch>
            <Route exact path='/' component={ Home } />
            <Route path='/ingredients' component={ Ingredients } />
            <Route path='/meals' component={ Meals } />
          </Switch>
        </Router>
      </Content>
      </Provider>

    );
  }
}

export default App;
