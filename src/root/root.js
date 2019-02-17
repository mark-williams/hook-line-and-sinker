import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home';
import Counter from '../counter';

const Root = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route component={Home} />
      </Switch>
    </Router>
  </div>
);

export default Root;
