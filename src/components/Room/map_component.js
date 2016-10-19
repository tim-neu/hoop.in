import React from 'react';

const Gmap = props => (
<div>
	<iframe className="center-block" src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBlnC4Cp2iBrYCbpQ4jLEYIhD4_MGQXxd4&q=Space+Needle,Seattle+WA"></iframe>
		<button className="center-block">end game</button>
		<button className="center-block">leave game</button>
 </div>
);

export default Gmap;
