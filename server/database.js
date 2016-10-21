var Sequelize = require('sequelize');

var sequelize = new Sequelize('postgres://nhhfsvxl:PmfmyAew57jYcGCbVPbLg2A2n13rEyXD@elmer.db.elephantsql.com:5432/nhhfsvxl');

module.exports = {
  sequelize: sequelize,
};