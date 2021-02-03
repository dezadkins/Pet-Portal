'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vaccine = sequelize.define('Vaccine', {
    name: DataTypes.STRING,
    dateGiven: DataTypes.DATE
  }, {});
  Vaccine.associate = function(models) {
    // associations can be defined here
  };
  return Vaccine;
};