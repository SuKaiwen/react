import React, {Fragment} from 'react';
import {HashRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';

import App from './App';
import Connect4 from './Connect4'
import Calculator from './Calculator'
import Sorter from './Sorter'

function Main(){
  return (
      <Router>
      <Fragment>
          <Switch>
          <Route exact path = '/' component = {App} />
          <Route exact path = '/Connect4' component = {Connect4} />
          <Route exact path = '/Tictactoe' component = {App} />
          <Route exact path = '/Calculator' component = {Calculator} />
          <Route exact path = '/Sorter' component = {Sorter} />
          </Switch>
      </Fragment>
      </Router>
    );
}

export default Main;

