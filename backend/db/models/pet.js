'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    birthDate: DataTypes.DATE,
    photoURL: DataTypes.STRING
  }, {});
  Pet.associate = function(models) {
    // associations can be defined here
  };
  return Pet;
};