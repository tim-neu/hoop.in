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

sequelize.sync({force: true}).then(function(){
})

app.get('/api/newTeam', function (req, res) {

	var game = Game.build({location:"dennzzel street, santa monica", active:true});
	game.save().then(function(){
		console.log('i saved game properly');
	});
    var player = Player.build({
    	arrivalTime: "6PM",
    	active: false,
    	queued: true,
    	name: 'captain',
    	admin: true,
    });
    player.save().then(function(){
    	console.log('i saved player properly');
    });
    var team = Team.build({ count: 5 });
    team.save().then(function () {
      console.log('i saved the new team properly');
      this.setGame(game);
      res.send(team);
    });
});

app.get('/api/newPlayer', function(req,res){
    var player = Player.build({
    	arrivalTime: "3PM",
    	active: false,
    	queued: true,
    	name: 'new player',
    	admin: true,
    });
    player.save().then(function () {
    	console.log('i saved a new player to the persistant databaes');
    })
    res.send(player);

});