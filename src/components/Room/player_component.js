import React from 'react';

class Player extends React.Component {
	constructor (props) {
		super(props),
		this.state = { player: this.props.name };
	}

	removePlayer() {
		var self = this;
		console.log('i was clicked!');
		// axios({
		// 	method: 'delete',
		// 	url: '/api/deletePlayer',
		// 	data: {
		// 		name: this.props.name,
		// 		token: this.props.gameToken
		// 	}
		// })
		// .then(function (resp) {
		// 	console.log('i deleted the player, the resp is:',resp);
		// })
		// .catch(function (err) {
		// 	console.log('i failed in deleteing the player');
		// });
	}

	render () {
	return (
		  <div>
		  	<li> 
		  		<div className="text-center container">
		  			<div className="row">
		  				<div>{this.props.gameToken}</div>
		  				<h3 className="col-md-8">{this.props.name}</h3> 
		  				<button onClick={this.removePlayer.bind(this)} className="col-md-4 btn red">Remove</button>
		  			</div>
		  		</div>
		  	</li>
		  </div>
		);
	}
}

export default Player;
