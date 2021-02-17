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

      datestamp: {
        allowNull: true,
        type: DataTypes.DATEONLY,
      },

      weight: {
        allowNull: true,
        type: DataTypes.FLOAT,
      },
      length: {
        allowNull: true,
        type: DataTypes.FLOAT,
      },
    },
    {}
  );
  Graph.associate = function (models) {
    Graph.belongsTo(models.Pet, { foreignKey: "petId" });
  };
  return Graph;
};
