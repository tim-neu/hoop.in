const playerController = require('../controllers/player.js');
const express = require('express');
const playerRouter = express.Router();

playerRouter.get('/', playerController.GET);
playerRouter.post('/', playerController.POST);
playerRouter.delete('/', playerController.DELETE);

module.exports = playerRouter;
