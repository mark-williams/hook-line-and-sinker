import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Counter from '../counter/counter';

const Root = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/counter" component={Counter} />
      </Switch>
    </Router>
  </div>
);

export default Root;
