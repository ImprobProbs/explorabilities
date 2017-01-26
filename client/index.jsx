import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './app.jsx';
import Auth from './auth/auth.jsx';
import Signin from './auth/signin.jsx';
import Signup from './auth/signup.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/auth" component={Auth}>
      <Route path="signin" component={Signin}/>
      <Route path="signup" component={Signup}/>
    </Route>
    <Route path="auth" component={App}>
    </Route>
  </Router>,, document.getElementById('app'));
