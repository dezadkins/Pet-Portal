'use strict';
module.exports = (sequelize, DataTypes) => {
  const Milestone = sequelize.define('Milestone', {
    picURL: DataTypes.STRING,
    caption: DataTypes.STRING
  }, {});
  Milestone.associate = function(models) {
    // associations can be defined here
  };
  return Milestone;
};