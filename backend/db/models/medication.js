"use strict";
module.exports = (sequelize, DataTypes) => {
  const Medication = sequelize.define(
    "Medication",
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
      dosage: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      frequency: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Medication.associate = function (models) {
    Medication.belongsTo(models.Pet, { foreignKey: "petId" });
  };
  return Medication;
};
