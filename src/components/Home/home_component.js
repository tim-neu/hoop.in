//Libs
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import CreateButton from './create_button_component.js';
import JoinButton from './join_button_component.js';

import CSS from "../../CSS/home.css";

const Home = function () {
	return (
		<div>
			<div className='text-center body'>
				<div className='home-body-buttons'>
					<CreateButton />
					<JoinButton />
				</div>
			</div>

			<div className='support1'>
				<div className='container'>
					<div className='row step'>
						<div className='col-md-4'>
						</div>
						<div className='col-md-6'>
							<h1>create.</h1>
							<h4>Starting a new game is easy. Just hit the create button and fill in your name, location, and time.</h4>
						</div>
					</div>
				</div>
			</div>
			<div className='support2'>
				<div className='container'>
					<div className='row step'>
						<div className='col-md-4'>
						</div>
						<div className='col-md-6'>
							<h1>share.</h1>
							<h4>Then copy the game link, send it to your fellow hoopers, and wait for them to join the game.</h4>
						</div>
					</div>
				</div>
			</div>
			<div className='support3'>
				<div className='container'>
					<div className='row step'>
						<div className='col-md-4'>
						</div>
						<div className='col-md-6'>
							<h1>play.</h1>
							<h4>Enjoy a smoother pickup basketball experience where you never lose track of who has next.</h4>
						</div>
					</div>
				</div>
			</div>
			
			<div className='footer text-center'>
				<div className='container'>
					<div className='row info1'>
						<div className='col-md-4'>
							<h4>Hoop.in</h4>
							<p>Get your hoop on.</p>
						</div>
						<div className='col-md-4'>
							<h4>Info</h4>
							<ul>
								<li>About</li>
								<li>Contact</li>
								<li>Help</li>
							</ul>
						</div>
						<div className='col-md-4'>
							<div className='row team'>
								<h4>Team Hoopin</h4>
							</div>
							<div className='row'>
								<ul>
									<li>John</li>
									<li>Jess</li>
									<li>Tim</li>
								</ul>
							</div>
						</div>
					</div>
					<div className='row info2'>
						<p>Copyright © 2016 Hoop.in</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
