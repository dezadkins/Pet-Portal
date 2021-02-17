"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      
    */
    let updatedAt = new Date();
    let createdAt = new Date();
    return queryInterface.bulkInsert("Medications", [
      {
        petId: "1",
        name: "HeartGuard",
        dosage: "3",
        frequency: "Bi-Weekly",
        createdAt,
        updatedAt,
      },
      {
        petId: "2",
        name: "NexGard",
        dosage: "1",
        frequency: "Twice a Month",
        createdAt,
        updatedAt,
      },
      {
        petId: "3",
        name: "Steriods",
        dosage: "1",
        frequency: "One Time Use",
        createdAt,
        updatedAt,
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Medications", null, {});
  },
};
