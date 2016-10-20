
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./database.js').sequelize;
var Sequelize = require('sequelize');
const Team = require('./controllers/team.js');
const Game = require('./controllers/game.js');
const Player = require('./controllers/player.js');
const app = express();
// const router = require('./routers/player_router.js');
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
	var team1 = Team.build({ count: teamCount });
	var team2 = Team.build({ count: 0 });
    var player = Player.build({
    	arrivalTime: '6PM',
    	active: false,
    	queued: true,
    	name: 'captain' + playerID,
    	admin: true,
    });
	game.save().then(function () {
		console.log('i saved game properly');
	    team1.save().then(function () {
	      console.log('i saved team 1 properly');
	      this.setGame(game);
		    player.save().then(function () {
		    	console.log('i saved player properly');
		    	this.setGame(game);
		    	this.setTeam(team1);
		    	// team.setPlayer(this);
		    });
	    });
	    team2.save().then(function () {
	      console.log('i saved team 2 properly');
	      this.setGame(game);
	    });
	});

    var obj = {};
    obj.player = player;
    obj.team1 = team1;
    obj.team2 = team2;
    obj.game = game;
    res.send(obj);

});

// app.get('/api/getPlayers', function (req, res) {
// 	let playerData = {team1: null, team2: null};
// 	Player.findAll({}).then(function (team1) {
// 		playerData.team1 = team1;
// 		res.send(playerData);
// 	}).catch(function(err){
// 		console.log('error getting team1');
// 	});
// });

//below is hard coded data that simulates when a player joins a game 
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
	var requestToken = 'secretpw1'; //get from req object, hard coding now
	var newPlayer = Player.build({
		arrivalTime: '6PM',
		active: false,
		queued: true,
		name: 'player' + playerID,
		admin: false
	}).save()
	  .then(function() {
	  	console.log("I saved ", newPlayer)
	  }).catch(function(error) {
	    console.log("Error saving player", error);
	  });

	//should be taken form the req object hard code now
	Game.findOne({where: {token: requestToken}}).then(function(game){
		console.log('I found the game!',game);
		console.log('game id is:',game.dataValues.id);
		Team.findAll({where: {gameId: game.dataValues.id}}).then(function(teams){
			console.log('i found the teams with the right game ID!',teams);
			var team1 = teams[0];
			var curCount1 = team1.dataValues.count;
			var team2 = teams[1];
			var curCount2 = team2.dataValues.count;
			if (curCount1 < 3){
				newPlayer.save().then(function(){
					console.log(' team1 has a spot open');
					this.setTeam(team1);
					this.setGame(game);
				})
				curCount1++;
				team1.update({count: curCount1});
			}
			else if (curCount2 < 3){
				newPlayer.save().then(function(){
					console.log(' team 2 has a spot open');
					this.setTeam(team2);
					this.setGame(game);
				})
				curCount2++;
				team2.update({count: curCount2});
			}
			else{
				newPlayer.save().then(function(){

					console.log('the player has to wait for the next game');
					console.log('check arrivalTime to see who the next player is');
					this.setGame(game);
				})
			}


		})

	}).catch(function(err){
		console.log('i couldnt find the game');
	});

    res.send('/api/newPlayer');

});