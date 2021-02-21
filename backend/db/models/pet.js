"use strict";
module.exports = (sequelize, DataTypes) => {
  const Pet = sequelize.define(
    "Pet",
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "Users",
        },
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      species: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      birthDate: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      photoURL: {
        allowNull: true,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Pet.associate = function (models) {
    Pet.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Pet;
};
