import React from 'react';

const Signup = (props) => (
  <div id="signup">
    <h2>Manage your next vacation. Find things-to-do and local events and store it all in one place.</h2>
    <form name="signupForm" onSubmit={props.signup}>
      <div>
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" required />
      </div>
      <div>
        <input type="password" name="confirm_password" placeholder="Confirm Password" required />
      </div>
      <button type="submit" className="btn">Signup</button>
    </form>
    <div className="error-text">{props.error}</div>
  </div>
);

export default Signup;
