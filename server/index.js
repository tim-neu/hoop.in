const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database.js').sequelize;
var Sequelize = require('sequelize');
const Team = require('./controllers/team.js');
const Game = require('./controllers/game.js');
const Player = require('./controllers/player.js');
const app = express();
Team.belongsTo(Game);
Team.hasMany(Player);
Game.hasMany(Team);
Game.hasMany(Player);
Player.belongsTo(Team);
Player.belongsTo(Game);

app.use(express.static('./public'));

app.use(bodyParser.json());

app.listen(3000, function () {
	console.log('Listnening on 3000');
});

sequelize.sync({ force: true }).then(function () {
});

//below is hardcoded data that simulates when a user creates a new Game:
//on a post request for a new game, we need to:
// 1. create a new game table.
// 2. create a new Team and set the gameID(the foreign key) of the team.
// 3. create a new player and set the gameID and teamID of the player.
var gameID = 0; 
var playerID = 0;
var teamCount = 0;
var secretpw = 0;
app.post('/api/newGame', function (req, res) {
	gameID++;
	playerID++;
	teamCount++;
	secretpw++;
	var location = 'location ' + gameID;
	var game = Game.build({ token: 'secretpw'+ secretpw, location: location, active: true });
	game.save().then(function () {
		console.log('i saved game properly');
	});

    var team = Team.build({ count: teamCount });
    team.save().then(function () {
      console.log('i saved the new team properly');
      this.setGame(game);
    });
    var player = Player.build({
    	arrivalTime: '6PM',
    	active: false,
    	// token: secretpw,
    	queued: true,
    	name: 'captain' + playerID,
    	admin: true,
    });
    player.save().then(function () {
    	console.log('i saved player properly');
    	this.setGame(game);
    	this.setTeam(team);
    	// team.setPlayer(this);
    	res.send('hi');
    });
});

//below is a hard coded data that simulates when a player joins a game 
// using the token that they were given. on a post request for a new 
//player, we need to:
// 1. Get the token from the req object.
// 2. create a player instance by using the req object.
// 3. Find the game with that right token.
// 4. Set the gameID of the player.
// 5. Find the team with the associated gameID
// 6. Set the gameID for the team.
// 7. Set the teamID for the player.
app.post('/api/newPlayer', function (req, res) {
	playerID++;
	var requestToken = 1; //get from req object, hard coding now
	var newPlayer = Player.build({
		arrivalTime: '6PM',
		active: false,
		queued: true,
		name: 'player' + playerID,
		admin: false
	}); //should be taken form the req object hard code now
	Game.findOne({where: {token: requestToken}}).then(function(game){
		console.log('I found the game!');

	});

    res.send(player);

});