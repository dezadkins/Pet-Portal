"use strict";
module.exports = (sequelize, DataTypes) => {
  const Graph = sequelize.define(
    "Graph",
    {
      petId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Pets",
        },
      },
      weight: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      length: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Graph.associate = function (models) {
    Graph.belongsTo(models.Pet, { foreignKey: "petId" });
  };
  return Graph;
};
