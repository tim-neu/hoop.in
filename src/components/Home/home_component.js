//Libs
import React from 'react';
import ReactDOM from 'react-dom';

//Components
import CreateButton from './create_button_component.js';
import JoinButton from './join_button_component.js';

const Home = function () {
	return (
		<div className='text-center'>
			<section><h1>Home</h1></section>
			<div>
				<div>
					<CreateButton />
					<JoinButton />
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<Home />, document.getElementById('root'));

export default Home;
