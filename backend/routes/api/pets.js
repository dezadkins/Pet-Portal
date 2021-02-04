const express = require("express");
const asyncHandler = require("express-async-handler");

const { User, Pet } = require("../../db/models");
const medication = require("../../db/models/medication");

const router = express.Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const pets = await Pet.findAll();
    res.json(pets);
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

router.post(
  "/meds",
  asyncHandler(async (req, res, next) => {
    const { petId, name, dosage, frequency } = req.body;
    const med = await Medication.create({
      petId,
      name,
      dosage,
      frequency,
    });
    res.json(med);
  })
);

module.exports = router;
