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

      // datestamp:{
      //   allowNull: false,
      //   type: DataTypes.DATEONLY

      // },

      weight: {
        allowNull: true,
        type: DataTypes.INTEGER,
      },
      length: {
        allowNull: true,
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
