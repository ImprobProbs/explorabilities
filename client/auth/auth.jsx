import React from 'react';
import {Link} from 'react-router';
import axios from 'axios';

export default class Auth extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      error: ''
    };

    this.handleSignin = this.handleSignin.bind(this);
    this.handleSignup = this.handleSignup.bind(this);
    this.routeToExplore = this.routeToExplore.bind(this);
    this.setError = this.setError.bind(this);
  }

  render () {
    return (
      <div id="authBody">
        <div id="authContainer">
          <div id="authHeader">
            <h1>Welcome to <span className="beautify">Explorabilities</span></h1>
          </div>
          <div id="authContent">
            {React.cloneElement(this.props.children, {
              error: this.state.error,
              signin: this.handleSignin,
              signup: this.handleSignup
            })}
          </div>
          <div id="authNav">
            <Link to="/auth/signin">
              <button>Signin</button>
            </Link>
            <Link to="/auth/signup">
              <button>Signup</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  handleSignin (e) {
    e.preventDefault();
    const email = e.target.querySelector('[name="email"]').value;
    const password = e.target.querySelector('[name="password"]').value;

    axios.get('/users/signin', {
      params: {
        email: email,
        password: password
      }
    })
    .then(this.routeToExplore)
    .catch(this.setError);
  }

  handleSignup (e) {
    e.preventDefault();
    const email = e.target.querySelector('[name="email"]').value;
    const password = e.target.querySelector('[name="password"]').value;
    const confirmPassword = e.target.querySelector('[name="confirm_password"]').value;

    if (password !== confirmPassword) {
      this.setState({
        error: 'Passwords do not match'
      });
    } else {
      axios.post('/users/create', {
        email: email,
        password: password
      })
      .then(this.routeToExplore)
      .catch(this.setError);
    }
  }

  routeToExplore (res) {
    if (res.data.success) {
      localStorage.token = res.data.token;
      this.props.router.push('/explore');
    } else {
      this.setState({
        error: 'An error occurred'
      });
    }
  }

  setError (err) {
    this.setState({
      error: err.response.data
    });
  }
}
