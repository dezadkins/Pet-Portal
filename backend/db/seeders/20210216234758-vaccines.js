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
    return queryInterface.bulkInsert("Vaccines", [
      {
        petId: "1",
        name: "Distemper",
        dateGiven: "01/12/2021",
        createdAt,
        updatedAt,
      },
      {
        petId: "2",
        name: "Hepatitis",
        dateGiven: "01/12/2021",
        createdAt,
        updatedAt,
      },
      {
        petId: "3",
        name: "Leptospirosis",
        dateGiven: "01/12/2021",
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
    return queryInterface.bulkDelete("Vaccines", null, {});
  },
};
