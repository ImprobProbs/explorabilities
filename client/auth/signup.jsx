import React from 'react';

export default class Signup extends React.Component {
  render () {
    return (
      <div id="signup">
        <h2>Manage your next vacation. Find things-to-do and local events and store it all in one place.</h2>
        <form name="signupForm" onSubmit={this.submit}>
          <div>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div>
            <input type="password" name="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn">Signup</button>
        </form>
        <div className="error-text"></div>
      </div>
    );
  }

  handleSubmit (e) {
    e.preventDefault();
    const email = e.target.querySelector('[name="email"]').value;
    const password = e.target.querySelector('[name="password"]').value;

    axios.post('/users/create', {
      email: email,
      password: password
    })
    .then(function(response){
      console.log(response.data);
      console.log(response.status);
    }).catch(function(error) {
      console.log(error);
    });
  }
}
