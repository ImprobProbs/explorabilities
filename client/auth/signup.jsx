import React from 'react';
import {Link} from 'react-router';

const Signup = () => {
  return (
    <div>
      <form name="signupForm">
        <div>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <button type="submit" className="btn signup-button">Signup</button>
      </form>
      <div className="error"></div>
    </div>
  );
};

export default Signup;
