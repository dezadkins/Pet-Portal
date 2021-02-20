"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Medications", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      dosage: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      unit: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      frequency: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      petId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Pets" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Medications");
  },
};
