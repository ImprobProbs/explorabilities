import React from 'react';

class Place extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id='place'>
        <img src="img/833.jpg" height="100" width="100"/>
        <ul>
          <li>More place info</li>
          <li>More place info</li>
          <li>More place info</li>
          <li>More place info</li>
        </ul>
      </div>
    )
  }
}

export default Place
