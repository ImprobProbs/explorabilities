import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav.jsx';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    );
  }
}
