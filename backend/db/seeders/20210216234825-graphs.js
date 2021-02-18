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
        datestamp: "11/15/2020",
        weight: "3.4",
        length: "6",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "12/05/2020",
        weight: "4.6",
        length: "7",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "01/14/2021",
        weight: "8.1",
        length: "12",
        createdAt,
        updatedAt,
      },
      {
        petId: "2",
        datestamp: "08/13/2019",
        weight: "6",
        length: "12",
        createdAt,
        updatedAt,
      },
      {
        petId: "3",
        datestamp: "06/12/2012",
        weight: "10",
        length: "16",
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
    return queryInterface.bulkDelete("Graphs", null, {});
  },
};
