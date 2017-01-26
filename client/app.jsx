import React from 'react';
import reactDOM from 'react-dom';
import Search from '../public/components/Search.jsx';

export default class App extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Search />
      );
  }
}
