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
          "https://i.pinimg.com/736x/f9/d3/2c/f9d32ceadaf567b6e732867063c7ff02.jpg",
        caption: "First Pic Ever!!!",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        picURL:
          "https://nebula.wsimg.com/8cf88f7339fafaa62acf210751c4920d?AccessKeyId=96C8B0CF55A5FE06885E&disposition=0&alloworigin=1",
        caption: "Three Days with Buddy!",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        picURL:
          "https://www.pets4homes.co.uk/images/classifieds/2020/01/30/2584798/large/female-shih-tzu-puppy-for-sale-5e4a4cd0a59ad.jpg",
        caption: "Hey you!",
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
