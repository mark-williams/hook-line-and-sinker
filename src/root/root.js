import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from '../home';
import Counter from '../counter';
import SimpleForm from '../simple-form';
import ComplexForm from '../complex-form';
import ArticleSearch from '../article-search';

const Root = () => (
  <div>
    <Router>
      <Switch>
        <Route path="/counter" component={Counter} />
        <Route path="/simple-form" component={SimpleForm} />
        <Route path="/complex-form" component={ComplexForm} />
        <Route path="/data-retrieval" component={ArticleSearch} />
        <Route component={Home} />
      </Switch>
    </Router>
  </div>
);

export default Root;
