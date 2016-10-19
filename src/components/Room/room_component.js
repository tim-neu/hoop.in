import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gmap from './map_component.js';
import Queue from './queue_component.js';
import axios from 'axios';


class Room extends React.Component {
  constructor (props) {
    super(props),
    this.state = {};
  }

  getTeam = () => (
    axios.get('/api/newTeam')
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    })
  )

  render () {
    return (
      <div className="room" onClick={this.getTeam}>
        <Gmap />
        <Queue />
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById('root'));

export default Room;
