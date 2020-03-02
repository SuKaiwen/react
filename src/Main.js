import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import './index.css';

import App from './App';
import Connect4 from './Connect4'
import Calculator from './Calculator'

function Main(){
  return (
      <Router>
      <Fragment>
          <Switch>
          <Route exact path = '/' component = {App} />
          <Route exact path = '/Connect4' component = {Connect4} />
          <Route exact path = '/Tictactoe' component = {App} />
          <Route exact path = '/Calculator' component = {Calculator} />
          </Switch>
      </Fragment>
      </Router>
    );
}

export default Main;

