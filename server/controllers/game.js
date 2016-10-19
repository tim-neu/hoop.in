var Sequelize = require('sequelize');

var sequelize = require('../database.js').sequelize;

var Game = sequelize.define('game', {
  time: {
    type: Sequelize.DATE,
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

module.exports = Game;
