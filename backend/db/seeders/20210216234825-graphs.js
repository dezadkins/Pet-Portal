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
        datestamp: "12/12/2020",
        weight: "3.31",
        length: "6",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "12/20/2020",
        weight: "4.20",
        length: "6.4",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "12/28/2020",
        weight: "4.60",
        length: "6.6",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "01/03/2021",
        weight: "5.10",
        length: "6.9",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "01/12/2021",
        weight: "5.90",
        length: "7.1",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "01/17/2021",
        weight: "6.00",
        length: "7.4",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "01/24/2021",
        weight: "6.60",
        length: "7.9",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "01/28/2021",
        weight: "6.75",
        length: "8.0",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "01/28/2021",
        weight: "7.30",
        length: "8.4",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "02/07/2021",
        weight: "7.70",
        length: "9.2",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        datestamp: "02/15/2021",
        weight: "8.0",
        length: "10",
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
