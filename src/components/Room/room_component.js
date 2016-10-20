import React, { Component } from 'react';
import Gmap from './map_component.js';
import Queue from './queue_component.js';
import axios from 'axios';
let token = "njhgfk";

class Room extends React.Component {
  constructor (props) {
    super(props),
    this.state = {};
  }

  componentWillMount() {
    this.getTeam();
  }
  
  getTeam() {
    const teamGetCall = () => (axios.get(`/api/getPlayers?token=${token}`)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    }));
    teamGetCall();
    setInterval(teamGetCall, 5000);
  }

  render () {
    return (
      <div className="room" onClick={this.getTeam}>
        <Gmap />
        <Queue />
      </div>
    );
  }
}

export default Room;
