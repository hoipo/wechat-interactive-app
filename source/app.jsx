import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import { Router, Route, hashHistory } from 'react-router';
import App from './components/App';
import Index from './components/Index';
import './style/reset.less';
render(
  (
  <Router history={hashHistory}>
    <Route path="/" component={Index}/>
  </Router>
  ), document.body.appendChild(document.createElement('div'))
);
