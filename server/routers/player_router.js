const playerController = require('../controllers/player.js');
const express = require('express');
const playerRouter = express.Router();

playerRouter.get('/', playerController.GET);
playerRouter.post('/', playerController.POST);

module.exports = playerRouter;
