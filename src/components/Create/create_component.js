//Libs
import React from 'react';
import ReactDOM from 'react-dom';

//Components
// import GameLocation from './components/Create/game_location_component.js';

const Create = function () {
	return (
		<div className='text-center'>
			<section><h1>Create Game</h1></section>
			<div>
				<div><input type='text' name='name' placeholder='name' /></div>
				<div>import GameLocation</div>
				<div><input type='time' name='time' /></div>
			</div>
			<div>
				<div>
					<button>submit</button>
					<button>back</button>
				</div>
			</div>
		</div>
	);
};

ReactDOM.render(<Create />, document.getElementById('root'));

export default Create;
