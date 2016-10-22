var Sequelize = require('sequelize');

var sequelize = require('../database.js').sequelize;

var Game = sequelize.define('game', {
  time: {
    type: Sequelize.STRING,
    defaultValue: Sequelize.NOW,
  },
  token: {
    type: Sequelize.STRING,
  },
  location: {
    type: Sequelize.STRING,
  },
  active: {
    type: Sequelize.BOOLEAN,
  },
});

// var gameModel = {};
// gameModel.getGame = (requestedToken) => {
//   Game.findOne({ where:
//     {
//       token: requestedToken
//     }
//   })

// };

module.exports = Game;
