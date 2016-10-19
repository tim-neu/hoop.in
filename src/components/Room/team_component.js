import React, { Component } from 'react';
import Player from './player_component.js';
const players = ['Tim', 'Joe', 'Bob', 'John', 'Sam'];

const Team = (props) => {
	const playerList = players.map((name, i) => {
		return <Player name={name} key={i} />;
	});
	return (
		<div>
		<h1 className="text-center">{props.color}</h1>
		<ul className="list-unstyled">{playerList}</ul>
		</div>
		);
};

export default Team;
