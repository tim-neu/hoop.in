var Sequelize = require('sequelize');

var sequelize = require('../database.js').sequelize;

var Player = sequelize.define('player', {
  arrivalTime: {
    type: Sequelize.STRING,
  },
  // token: {
  // 	type: Sequelize.INTEGER,
  // },
  active: {
    type: Sequelize.BOOLEAN,
  },
  queued: {
    type: Sequelize.BOOLEAN,
  },
  name: {
    type: Sequelize.STRING,
  },
  admin: {
    type: Sequelize.BOOLEAN,
  },
});

module.exports = Player;

