"use strict";
module.exports = (sequelize, DataTypes) => {
  const Appointment = sequelize.define(
    "Appointment",
    {
      petId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Pets",
        },
      },
      datetime: {
        allowNull: false,
        type: DataTypes.DATE(6),
      },
      location: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      event: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Appointment.associate = function (models) {
    Appointment.belongsTo(models.Pet, { foreignKey: "petId" });
  };
  return Appointment;
};
