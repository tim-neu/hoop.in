var Sequelize = require('sequelize');

var sequelize = require('../database.js').sequelize;

var Team = sequelize.define('team', {
  loser: {
    type: Sequelize.INTEGER,
    defaultValue: -1,
  },
  winner: {
    type: Sequelize.INTEGER,
    defaultValue: -1,
  },
  count: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Team;
