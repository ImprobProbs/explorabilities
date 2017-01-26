import React from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ''
    };
  }

  render() {
    return (
      <div id='nav'>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input id="searchForm" type="text" value={this.state.query} onChange={this.handleChange.bind(this)} />
          <button type="submit" id="exploreButton">Explore!</button>
        </form>
        <button className="btn" id="logout">log out</button>
      </div>
    );
  }

  handleChange(e) {
    this.setState({query: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.post('SERVER OVERLORD MAKE ME AN ENDPOINT TO QUERY GOOGLE MAPS API', {
      query: this.state.query
    })
    .then(function(response){
      //AXIOS GET THE MAP
      //RENDER THE MAP...SOMEHOW
      console.log(response.data);
      console.log(response.status);
    }).catch(function(error) {
      console.log(error);
    });

    this.setState({query: ''});
  }
}
