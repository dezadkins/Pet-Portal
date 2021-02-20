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
            "https://uc5844c7072b82e25f940cb53ad2.dl.dropboxusercontent.com/cd/0/inline/BJW26XjqTltCOXaEyyiIXQBM6UtxmOiuBgeu64xGCvYivHP6ZB6EB235BurjOls3H0oNdSZqzbxiFVw4Gc3tAiWwm3zdSpPcut2jpi1mE3glpL4ETYsuj9oefmvnLvg0xyo/file#",
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
