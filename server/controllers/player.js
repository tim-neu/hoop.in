var Game = require('../models/game_model.js');
var Team = require('../models/team_model.js');
var Player = require('../models/player_model.js');
var playerController = {};

//FILL OUT YOUR CODE JESSE
playerController.GET = (req, res) => {
  res.send('i am in player controller!');
};

playerController.POST = (req, res) => {
	//res.send("I'm in player controller post correctly!");
	var requestToken = '123'; //get from req object, hard coding now
	var newPlayer = Player.build({
		arrivalTime: '9PM',
		active: false,
		queued: true,
		name: req.body.name,
		admin: false,
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

};



module.exports = playerController;
