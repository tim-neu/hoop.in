const playerController = require('../controllers/player.js');
const express = require('express');
const playerRouter = express.Router();

playerRouter.get('/', function (req, res) {
	res.send('i hit /api/getPlayers correctly');
});

module.exports = playerRouter;
