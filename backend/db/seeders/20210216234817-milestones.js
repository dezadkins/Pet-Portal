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
          "https://uc53422ef8bb272b2c6e589b4c0c.dl.dropboxusercontent.com/cd/0/inline/BJVRysf6ZxvAcuWsKZ_L3SLZvbuh_7eDg9xyjsjk20Kcf6LSL-m5Z-eG1oVsmFpYd4wKeOBFKx5d05xPLTMF6U_ywdKLnh12fXgJQTXsKEfj3hkjPX28pNCqCluWvR4C2zQ/file#",
        caption: "First Pic Ever!!!",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        picURL:
          "https://uc06107f94df9b14f43ad403295f.dl.dropboxusercontent.com/cd/0/inline/BJX3gjUzPnM-h_xb-AQz2s9Xo90SitnUi-g81XbdzrxQAapFopymgcnn_IhWa7uFUsPE5pW0w1NbnV3RBMm51kKsOH5ZaPSyc1YnFQa8rj_0f__AE0HcdKndtJW2-2DvVYQ/file#",
        caption: "Three Days with Buddy!",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        picURL:
          "https://ucb4c125ed638243e646d75414ec.dl.dropboxusercontent.com/cd/0/inline/BJUcKJugUteTOp1vky2jnKzvnUMvKfz0tVvqQoXGrUbGr_RBWJKwj6dGvZrXH_plh8d2e0exelCZU8LnIoRIGp5wSnNtk0TVZN6TArsK1hi5IdjcfrnWfOnEebyBDDzlouE/file#",
        caption: "Hey you!",
        createdAt,
        updatedAt,
      },

      {
        petId: "1",
        picURL:
          "https://ucd9f769c5496d457518c032b254.dl.dropboxusercontent.com/cd/0/inline/BJXPeGYgWu90f4FV-HOkCQ75rVsNy7OEaNM0ckwUSyWdq5Nh1I0Sldo37sXJQlo1Q-CSWvx5l4YuD75hG87sEtRx6br8ccbbkZpLzaAa8H8WEBhesL690pdNJmweBOHPgLA/file#",
        caption: "Playing with Sis :)",
        createdAt,
        updatedAt,
      },
      {
        petId: "1",
        picURL:
          "https://uc85983bfdd30ceda53070dd10f5.dl.dropboxusercontent.com/cd/0/inline/BJUTQeSkKrb10JFiBgHKsYr_KZxs136ipYTtnPFiaAd78lTPixaxf7Fq3M0EewM7PKv9qNusIlHv5NIRU-bbTMDbHyAwjK05o7LOQ3Fb1mGj8YsycgDdC2h-ZZn4nX73lxs/file#x",
        caption: "New Bed!!",
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
