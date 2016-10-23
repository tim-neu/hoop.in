import React, { Component } from 'react';
import Gmap from './map_component.js';
import Queue from './queue_component.js';
import axios from 'axios';

class Room extends React.Component {
  constructor (props) {
    super(props),
    this.state = {players: { team1: [], team2: [], queue: [] }};
  }

  componentWillMount() {
    var self = this;
    this.setState({ token: localStorage.getItem('token') });
    this.getTeam();
  }

  getTeam() {
    var self = this;
    const teamGetCall = () => (axios.get(`/api/getPlayers?token=${this.state.token}`)
    .then(function (response) {
      console.log(response.data.team1.length)
        if(response.data.team1.length !== 0 || response.data.team2.length !== 0){
          console.log("inside if promise")
          self.setState({players: { team1: response.data.team1, team2: response.data.team2, queue: response.data.queue }});
        }
    })
    .catch(function (error) {
      console.log(error);
    })
    );
    teamGetCall();
    setInterval(teamGetCall, 5000);
  }

  // pass teams object into queue

  render () {
    return (
      <div className="room">
        <Gmap />
        <Queue players={this.state.players} gameToken={this.state.token} getTeam={this.getTeam.bind(this)} />
      </div>
    );
  }
}

export default Room;
