"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      
    */
    let createdAt = new Date();
    let updatedAt = new Date();
    return queryInterface.bulkInsert("Graphs", [
      {
        petId: "1",
        datestamp: "MM/DD/YYYY",
        weight: "3",
        length: "6",
        createdAt,
        updatedAt,
      },
      { petId: "2", weight: "6", length: "12", createdAt, updatedAt },
      { petId: "3", weight: "10", length: "16", createdAt, updatedAt },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Graphs", null, {});
  },
};
