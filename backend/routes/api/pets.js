const express = require("express");
const asyncHandler = require("express-async-handler");

const { User, Pet } = require("../../db/models");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const users = await User.findAll();
    res.json(users);
  })
);

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const { userId, name, species, birthDate, photoURL } = req.body;
    const pet = await Pet.create({
      userId,
      name,
      species,
      birthDate,
      photoURL,
    });
    res.json(pet);
  })
);

module.exports = router;
