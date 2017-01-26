import React from 'react';
import {Link} from 'react-router';

const Signup = () => {
  return (
    <div id="signup">
      <h2>Manage your next vacation. Find things-to-do and local events and store it all in one place.</h2>
      <form name="signupForm">
        <div>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <button type="submit" className="btn">Signup</button>
      </form>
      <div className="error"></div>
    </div>
  );
};

export default Signup;
