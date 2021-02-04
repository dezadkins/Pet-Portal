"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Graphs", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      weight: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      length: {
        allowNull: true,
        type: Sequelize.INTEGER,
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
    return queryInterface.dropTable("Graphs");
  },
};
