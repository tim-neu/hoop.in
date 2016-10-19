import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Gmap from './map_component.js';
import Queue from './queue_component.js';

class Room extends React.Component {
  constructor (props) {
    super(props),
    this.state = {};
  };

  render () {
    return (
      <div className="room">
        <Gmap />
        <Queue />
      </div>
    );
  }
}

ReactDOM.render(<Room />, document.getElementById('root'));

export default Room;
