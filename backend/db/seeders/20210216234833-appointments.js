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
        datetime: "03/21/2021 14:30",
        location: "24 North East St.",
        place: "Banfield Vet",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datetime: "03/01/2021 09:30",
        location: "58 Main St.",
        place: "Doggy Paws Haircut",
        createdAt,
        updatedAt,
      },
      {
        petId: "2",
        datetime: "06/13/2018 08:30",
        location: "59 Coldwell Blvd Ste 16.",
        place: "Great Paws Vet",
        createdAt,
        updatedAt,
      },
      {
        petId: "3",
        datetime: "03/15/2019 09:30",
        location: "31 CloverLane Ave.",
        place: "Doggy Day Care",
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
