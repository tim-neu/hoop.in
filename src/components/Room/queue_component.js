import React from 'react';
import Team from './team_component.js';

const Queue = props => {
  if(props.players.team1.length === 0 && props.players.team2.length === 0){
  	{console.log(props.players, "inside Queue first if")}
	return (<h1 className="text-center">Loading</h1>)
  }
  else{
	return (<div>
		{console.log(props.players.team1,"props.players.team1 in else")}
		<Team team={props.players.team1} color={'blue'}/>
	  	<Team team={props.players.team2} color={'red'}/>
	  </div>)
}
};

export default Queue;
