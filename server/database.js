var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://mhcdrivh:38VvuH3V6KGaiK-3NPb-H4paYlDTMV5o@elmer.db.elephantsql.com:5432/mhcdrivh');

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

var Game = sequelize.define('game', {
  time: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
  },
  location: {
    type: Sequelize.STRING,
  },
  active: {
    type: Sequelize.BOOLEAN,
  },
});

var Player = sequelize.define('player', {
  arrivalTime: {
    type: Sequelize.DATE,
  },
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

Team.belongsTo(Game);
Team.hasMany(Player);
Game.hasMany(Team);
Game.hasMany(Player);

Player.belongsTo(Team);
Player.belongsTo(Game);

// will drop the tables and init them
sequelize.sync({ force: true }).then(function () {
   console.log('Created tables in db.js');
});
