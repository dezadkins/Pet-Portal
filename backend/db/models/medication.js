'use strict';
module.exports = (sequelize, DataTypes) => {
  const Medication = sequelize.define('Medication', {
    name: DataTypes.STRING,
    dosage: DataTypes.INTEGER,
    frequency: DataTypes.STRING
  }, {});
  Medication.associate = function(models) {
    // associations can be defined here
  };
  return Medication;
};