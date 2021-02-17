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
    return queryInterface.bulkInsert("Appointments", [
      {
        petId: "1",
        datetime: "08/21/2020 14:30",
        location: "24 North East St.",
        createdAt,
        updatedAt,
      },
      {
        petId: "2",
        datetime: "06/13/2018 08:30",
        location: "59 Coldwell Blvd Ste 16.",
        createdAt,
        updatedAt,
      },
      {
        petId: "3",
        datetime: "03/15/2019 09:30",
        location: "31 CloverLane Ave.",
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
    return queryInterface.bulkDelete("Appointments", null, {});
  },
};
