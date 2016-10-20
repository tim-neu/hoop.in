var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://svmuoadp:8ZWQdJbithVIP05btL4TQVtIn-_Y3FtV@elmer.db.elephantsql.com:5432/svmuoadp');

module.exports = {
  sequelize: sequelize,
};

