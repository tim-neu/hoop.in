var Game = require('../models/game_model.js');
var Team = require('../models/team_model.js');
var Player = require('../models/player_model.js');
var playerController = {};

//FILL OUT YOUR CODE JESSE
playerController.GET = (req, res) => {
  //find game pluck id from game
  var token = req.query.token;
  var playerData = { team1: [], team2: [], queue: [] };
  Game.findOne({ where: {token: token}})
  .then(function(game){
    Team.findAll({ where: {gameId: game.id}})
    .then(function(teams){
        var team1 = teams[0];
        var team2 = teams[1];
        Player.findAll({ where: {teamId: team1.id}})
        .then(function(players1){
            playerData.team1 = players1;
        });
        Player.findAll({ where: {teamId: team2.id}})
        .then(function(players2){
            playerData.team2 = players2;
        });
        Player.findAll({ where: {teamId: null}})
        .then(function(queue){
            playerData.queue = queue;
            res.send(playerData);
        });
    }).catch(function(){
        console.log("shit went left with the team get inside the game get")
    });
  }).catch(function(err){
    console.log("shit went left with the game get")
  });

  }

  //find teams with matching game id grab team id
  // create empty object
  // save < team id to prop team1
  // save > team id to prop team2
  // save players with game id but no teamid to queue



playerController.POST = (req, res) => {
    //res.send("I'm in player controller post correctly!");
    var requestToken = req.body.token; //get from req object, hard coding now
    //should be taken form the req object hard code now
    Game.findOne({ where: {token: requestToken}}).then(function(game){
	    var newPlayer = Player.build({
	    	arrivalTime: game.dataValues.time,
	        active: false,
	        queued: true,
	        name: req.body.name,
	        admin: false,
	    });
        console.log('I found the game!',game);
        console.log('game id is:',game.dataValues.id);
        Team.findAll({where: {gameId: game.dataValues.id}}).then(function(teams){
            console.log('i found the teams with the right game ID!',teams);
            var team1 = teams[0];
            var curCount1 = team1.dataValues.count;
            var team2 = teams[1];
            var curCount2 = team2.dataValues.count;
            var teamToBePlacedFirst;
            var otherTeam;
            if (curCount1 > curCount2){
                teamToBePlacedFirst = team1;
                otherTeam = team2;
            }
            else{
                teamToBePlacedFirst = team2;
                otherTeam = team1;
            }
            if (teamToBePlacedFirst.dataValues.count <= 4){
                newPlayer.save().then(function(){
                    console.log(' team1 has a spot open');
                    this.setTeam(teamToBePlacedFirst);
                    this.setGame(game);
                })
                teamToBePlacedFirst.update({count: teamToBePlacedFirst.dataValues.count + 1});
            }
            else if (otherTeam.dataValues.count <= 4){
                newPlayer.save().then(function(){
                    console.log(' team 2 has a spot open');
                    this.setTeam(otherTeam);
                    this.setGame(game);
                })
                curCount2++;
                otherTeam.update({count: otherTeam.dataValues.count + 1});
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





playerController.DELETE = (req, res) => {
	var gameToken = req.body.token;
	var playerName = req.body.name;
	console.log(req.body.token)

	Game.findOne({ where: {token: gameToken}})
	.then(function(game){
		Team.findAll({ where: {gameId: game.id}})
		.then(function(teams){
			Player.destroy({ 
				where: {
					name: playerName
				}
			});
		}).catch(function(err){
			console.log('Team not found');
		});
	}).catch(function(err){
		console.log('Game not found');
	})
}


module.exports = playerController;