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
    return queryInterface.bulkInsert("Milestones", [
      {
        petId: "1",
        picURL:
          "https://www.dogtime.com/assets/uploads/2016/10/Shih-Tzu-Puppy-5-e1574460344177-1280x720.jpg",
        caption: "First Pic Ever!",
        createdAt,
        updatedAt,
      },
      {
        petId: "2",
        picURL:
          "https://www.perfectdogbreeds.com/wp-content/uploads/2019/06/Brindle-and-White-Pitbull.jpg",
        caption: "Helrroo!",
        createdAt,
        updatedAt,
      },
      {
        petId: "3",
        picURL:
          "http://shihtzuwire.com/wp-content/uploads/2017/02/Corgi_Shih_Tzu_Hybrid_10weeks_02-e1486788338206.jpg",
        caption: "Ready for a Haircut",
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
    return queryInterface.bulkDelete("Milestones", null, {});
  },
};
