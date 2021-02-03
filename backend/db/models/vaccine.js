"use strict";
module.exports = (sequelize, DataTypes) => {
  const Vaccine = sequelize.define(
    "Vaccine",
    {
      petId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Pets",
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      dateGiven: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {}
  );
  Vaccine.associate = function (models) {
    Vaccine.belongsTo(models.Pet, { foreignKey: "petId" });
  };
  return Vaccine;
};
