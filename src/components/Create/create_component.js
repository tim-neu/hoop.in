//Libs
import React, { Component } from 'react';
import axios from 'axios';
import {Link, browserHistory} from 'react-router';

//Components
// import GameLocation from './game_location_component.js';
// import SubmitButton from './submit_component.js';
// import BackButton from './back_component.js';

import CSS from "../../CSS/create.css";

class Create extends Component {
	constructor (props) {
		super(props);

		this.state = { name: '', location: '', time: '' , token: ''};
	}

	handleSubmit = (event) => {
	    event.preventDefault();
	    var name = this.state.name.trim();
	    var location = this.state.location.trim();
	    var time = this.state.time.trim();
	    if (!name || !location || !time) {
	    	console.log('Missing input!');
	    	return;
	    }
	    // POST: send post request to the server
	    const self = this;
	    axios.post('/api/newGame', {
				name: this.state.name,
				location: this.state.location,
				time: this.state.time
			})
		  .then(function (response) {
		  	localStorage.setItem("token", response.data.game.token);
		  	browserHistory.push('/share')
			console.log(response);
    	})
    	.catch(function (error) {
    		console.log(error);
    	})
	    this.setState({name: '', location: '', time: '', token: 'empty'});
	};

    render () {
		return (
			<div className='text-center'>
				<section><h1>Create Game</h1></section>
				<div className='body'>
					<form className='create-body'>
						<input type='text' name='name' placeholder='name' value={this.state.name} onChange={nameEvent => this.setState({ name: nameEvent.target.value })} />
						<input type='text' name='location' placeholder='location' value={this.state.location} onChange={locationEvent =>this.setState({ location: locationEvent.target.value })} />
						<input type='time' name='time' value={this.state.time} onChange={timeEvent => this.setState({ time: timeEvent.target.value })} />
    	  	  <div>
    	  	  	<button onClick={this.handleSubmit}><Link to='/share' >submit</Link></button>
							<button><Link to='/' >back</Link></button>
						</div>
					</form>
				</div>
			</div>
		);
	}
};

export default Create;
