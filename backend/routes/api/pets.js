const express = require("express");
const asyncHandler = require("express-async-handler");

const {
  User,
  Pet,
  Medication,
  Vaccine,
  Milestone,
  Graph,
  Appointment,
} = require("../../db/models");
// const medication = require("../../db/models/medication");

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

router.delete(
  "/:id",
  asyncHandler(async (req, res) => {
    const petId = parseInt(req.params.id, 10);
    const pet = await Pet.findByPk(petId);
    await pet.destroy();
    res.json(pet);
  })
);

// *************************************************************
// ******************** MEDICATION POST/GET ********************
// *************************************************************

router.post(
  "/:id/meds",
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

router.get(
  "/:id/meds",
  asyncHandler(async (req, res, next) => {
    const medId = parseInt(req.params.id, 10);
    const med = await Medication.findByPk(medId);

    res.json(med);
  })
);

router.get(
  "/:id/meds",
  asyncHandler(async (req, res, next) => {
    const meds = await Medication.findAll();
    res.json(meds);
  })
);

router.delete(
  "/:id/meds",
  asyncHandler(async (req, res) => {
    const medId = parseInt(req.params.id, 10);
    const med = await Medication.findByPk(medId);
    await med.destroy();
    res.json(med);
  })
);

// *************************************************************
// ******************** VACCINES POST/GET ********************
// *************************************************************

router.post(
  "/:id/vacs",
  asyncHandler(async (req, res, next) => {
    const { petId, name, dateGiven } = req.body;
    const vaccine = await Vaccine.create({
      petId,
      name,
      dateGiven,
    });
    res.json(vaccine);
  })
);

router.get(
  "/:id/vacs",
  asyncHandler(async (req, res, next) => {
    const vacId = parseInt(req.params.id, 10);
    const vaccine = await Vaccine.findByPk(vacId);

    res.json(vaccine);
  })
);

router.get(
  "/:id/vacs",
  asyncHandler(async (req, res, next) => {
    const vaccines = await Vaccine.findAll();
    res.json(vaccines);
  })
);

router.delete(
  "/:id/vacs",
  asyncHandler(async (req, res) => {
    const vacId = parseInt(req.params.id, 10);
    const vaccine = await Vaccine.findByPk(vacId);
    await vaccine.destroy();
    res.json(vaccine);
  })
);

// *************************************************************
// ******************** MILESTONES/EVENTS POST/GET ********************
// *************************************************************

router.post(
  "/:id/events",
  asyncHandler(async (req, res, next) => {
    const { petId, picURL, caption } = req.body;
    const event = await Milestone.create({
      petId,
      picURL,
      caption,
    });
    res.json(event);
  })
);

router.get(
  "/:id/events",
  asyncHandler(async (req, res, next) => {
    const eventId = parseInt(req.params.id, 10);
    const event = await Milestone.findByPk(eventId);

    res.json(event);
  })
);

router.get(
  "/:id/events",
  asyncHandler(async (req, res, next) => {
    const events = await Milestone.findAll();
    res.json(events);
  })
);

router.delete(
  "/:id/events",
  asyncHandler(async (req, res) => {
    const eventId = parseInt(req.params.id, 10);
    const event = await Milestone.findByPk(eventId);
    await event.destroy();
    res.json(event);
  })
);

// *************************************************************
// ******************** GRAPH POST/GET ********************
// *************************************************************

router.post(
  "/:id/graph",
  asyncHandler(async (req, res, next) => {
    const { petId, weight, length } = req.body;
    const graph = await Graph.create({
      petId,
      weight,
      length,
    });
    res.json(graph);
  })
);

router.get(
  "/:id/graph",
  asyncHandler(async (req, res, next) => {
    const graphId = parseInt(req.params.id, 10);
    const graph = await Graph.findByPk(graphId);

    res.json(graph);
  })
);

router.get(
  "/:id/graph",
  asyncHandler(async (req, res, next) => {
    const graphs = await Graph.findAll();
    res.json(graphs);
  })
);

router.delete(
  "/:id/graph",
  asyncHandler(async (req, res) => {
    const graphId = parseInt(req.params.id, 10);
    const graph = await Graph.findByPk(graphId);
    await graph.destroy();
    res.json(graph);
  })
);

// *************************************************************
// ******************** APPOINTMENTS POST/GET ********************
// *************************************************************

router.post(
  "/:id/appts",
  asyncHandler(async (req, res, next) => {
    const { petId, datetime, location } = req.body;
    const appointment = await Appointment.create({
      petId,
      datetime,
      location,
    });
    res.json(appointment);
  })
);

router.get(
  "/:id/appts",
  asyncHandler(async (req, res, next) => {
    const apptId = parseInt(req.params.id, 10);
    const appointment = await Appointment.findByPk(apptId);

    res.json(appointment);
  })
);

router.get(
  "/:id/appts",
  asyncHandler(async (req, res, next) => {
    const appts = await Appointment.findAll();
    res.json(appts);
  })
);

router.delete(
  "/:id/appts",
  asyncHandler(async (req, res) => {
    const apptId = parseInt(req.params.id, 10);
    const appointment = await Appointment.findByPk(apptId);
    await appointment.destroy();
    res.json(appointment);
  })
);

module.exports = router;
