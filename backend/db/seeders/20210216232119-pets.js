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
    return queryInterface.bulkInsert(
      "Pets",
      [
        {
          userId: "1",
          name: "Buddy",
          species: "Dog",
          birthDate: "10/09/2020",
          photoURL:
            "https://i.pinimg.com/originals/1d/d0/7d/1dd07dba3f864d8991826141123961c3.jpg",
          createdAt,
          updatedAt,
        },
        {
          userId: "1",
          name: "Lexi",
          species: "Dog",
          birthDate: "04/05/2012",
          photoURL:
            "https://www.k9ofmine.com/wp-content/uploads/2017/03/brindle-dog-breeds.jpg",
          createdAt,
          updatedAt,
        },
        {
          userId: "1",
          name: "Rory",
          species: "Dog",
          birthDate: "12/15/2006",
          photoURL:
            "https://www.pilotonline.com/resizer/cILZwieT0C5C411XqlpctmTPdJg=/415x311/top/cloudfront-us-east-1.images.arcpublishing.com/tronc/KL3U33F2LRDY5I2MUVOKXWZXGI.jpg",
          createdAt,
          updatedAt,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    return queryInterface.bulkDelete("Pets", null, {});
  },
};
