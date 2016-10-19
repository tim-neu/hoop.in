var Sequelize = require('sequelize');


var sequelize = new Sequelize('postgres://mhcdrivh:38VvuH3V6KGaiK-3NPb-H4paYlDTMV5o@elmer.db.elephantsql.com:5432/mhcdrivh');

module.exports = {
  sequelize: sequelize
}
