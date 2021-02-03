"use strict";
module.exports = (sequelize, DataTypes) => {
  const Milestone = sequelize.define(
    "Milestone",
    {
      petId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Pets",
        },
      },
      picURL: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      caption: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Milestone.associate = function (models) {
    Milestone.belongsTo(models.Pet, { foreignKey: "petId" });
  };
  return Milestone;
};
