const Auth = () => {
  return (
    <div>
      <h2>Welcome to <span className="beautify">Explorabilities</span></h2>
      {this.props.children}
    </div>
  );
};

export default Auth;
