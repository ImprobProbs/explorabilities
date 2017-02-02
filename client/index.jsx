import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './app.jsx';
import Auth from './auth/auth.jsx';
import Signin from './auth/signin.jsx';
import Signup from './auth/signup.jsx';
import Explore from './components/Explore.jsx';
import MyPlaces from './components/MyPlaces.jsx';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/auth" component={Auth}>
      <Route path="/auth/signin" component={Signin}/>
      <Route path="/auth/signup" component={Signup}/>
    </Route>
    <Route path="/" component={App}>
      <Route path="/explore" component={Explore}/>
      <Route path="/myplaces" component={MyPlaces}/>
    </Route>
  </Router>, document.getElementById('app'));
