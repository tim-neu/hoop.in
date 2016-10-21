import React, { Component } from 'react';
import { Link } from 'react-router';
import axios from 'axios';

//GET token

class Share extends Component {
  constructor (props) {
    super(props)

    this.state = {};
  }

  //GET token to form share link

  render () {
    return (
      <div className='text-center'>
        <section><h1>Share Game</h1></section>
        <div>https://hoopi.in/Link-to-room</div>
        <div>
          <button><Link to='/room' >create</Link></button>
          <button><Link to='/create' >back</Link></button>
        </div>
      </div>
    );
  }
}

export default Share;
