var rootRouter = require('express').Router();
var gameRouter = require('./game_router.js');
var playerRouter = require('./player_router.js');

// var playerRouter = require('./player_router.js');
// var teamRouter = require('./team_router.js');

rootRouter.use('/newGame', gameRouter);
rootRouter.use('/getPlayers', playerRouter);

// rootRouter.get('/', function (req, res) {
// 	res.send('i reached rootRouter');
// });
module.exports = rootRouter;
