app.get('/api/getPlayers', function (req, res) {
	let playerData = {gameId: null, team1: null, team2: null};
	let token = req.query.token;
	Game.findOne({where: {token: token}}).
	then(function (game) {
		playerData.gameId = game.id;
		Player.findAll({where: {id: playerData.gameId}}).
		then(function(response){
			res.send(response);
		}).catch(function(){
			console.log("error getting the players with gameId");
		});
	}).catch(function(err){
		console.log('error getting players');
	});
});