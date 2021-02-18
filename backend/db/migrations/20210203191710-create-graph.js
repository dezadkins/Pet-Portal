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
      datestamp: {
        allowNull: false,
        type: Sequelize.DATEONLY,
      },
      weight: {
        allowNull: true,
        type: Sequelize.FLOAT,
      },
      length: {
        allowNull: true,
        type: Sequelize.FLOAT,
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
