import {Link} from 'react-router';

const Signin = () => {
  return (
    <div>
      <form name="signinForm">
        <div>
          <input type="email" name="email" placeholder="Email" required />
        </div>
        <div>
          <input type="password" name="password" placeholder="Password" required />
        </div>
        <button type="submit" className="btn signin-button">Signin</button>
      </form>
      <div class="error"></div>
      <div>
        <Link to="signup">
          <button className="btn signup-button">Signup</button>
        </Link>
      </div>
    </div>
  );
};

export default Signin;
