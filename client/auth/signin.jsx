import React from 'react';

const Signin = (props) => (
  <div id="signin">
    <h2>Log in to Begin Exploring</h2>
    <form name="signinForm" onSubmit={props.signin}>
      <div>
        <input type="email" name="email" placeholder="Email" required />
      </div>
      <div>
        <input type="password" name="password" placeholder="Password" required />
      </div>
      <button type="submit" className="btn">Signin</button>
    </form>
    <div className="error-text">{props.error}</div>
  </div>
);

export default Signin;
