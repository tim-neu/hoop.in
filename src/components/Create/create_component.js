//Libs
import React, { Component } from 'react';
import axios from 'axios';

//Components
// import GameLocation from './game_location_component.js';
// import SubmitButton from './submit_component.js';
// import BackButton from './back_component.js';

class Create extends Component {
	constructor (props) {
		super(props);

		this.state = { name: '', location: '', time: '' };
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
	    axios.post('/api/newGame', {
			data: {
				name: this.state.name,
				location: this.state.location,
				time: this.state.time
			}
		})
		.then(function (response) {
			console.log(response);
    	})
    	.catch(function (error) {
    		console.log(error);
    	})
	    this.setState({name: '', location: '', time: ''});
	};

    render () {
		return (
			<div className='text-center'>
				<section><h1>Create Game</h1></section>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input type='text' name='name' placeholder='name' value={this.state.name} onChange={nameEvent => this.setState({ name: nameEvent.target.value })} />
					</div>
						Value of name: { this.state.name }
					<div>
						<input type='text' name='location' placeholder='location' value={this.state.location} onChange={locationEvent =>this.setState({ location: locationEvent.target.value })} />
					</div>
						Value of location: { this.state.location }
					<div>
						<input type='time' name='time' value={this.state.time} onChange={timeEvent => this.setState({ time: timeEvent.target.value })} />
					</div>
    	            Value of time: { this.state.time }
    	            <div>
    	            	<button>submit</button>
						<button>back</button>
					</div>
				</form>
			</div>
		);
	}
};

export default Create;
