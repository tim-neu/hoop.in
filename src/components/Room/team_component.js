import React, { Component } from 'react';
import Player from './player_component.js';
const players = ['Tim', 'Joe', 'Bob', 'John', 'Sam'];

const Team = (props) => {
	const playerList = props.team.map((name, i) => {
		return <Player name={name.name} key={i} gameToken={props.gameToken} />;
	});
	return (
		<div>
		<h1 className="text-center">{props.color}</h1>
		<ul className="list-unstyled">{playerList}</ul>
		</div>
		);
};

export default Team;
