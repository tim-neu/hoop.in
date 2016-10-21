const gameController = require('../controllers/game.js');
const gameRouter = require('express').Router();

gameRouter.get('/', gameController.GET);
gameRouter.post('/', gameController.POST);
module.exports = gameRouter;
