'use strict';
module.exports = (sequelize, DataTypes) => {
  const Graph = sequelize.define('Graph', {
    weight: DataTypes.INTEGER,
    length: DataTypes.INTEGER
  }, {});
  Graph.associate = function(models) {
    // associations can be defined here
  };
  return Graph;
};