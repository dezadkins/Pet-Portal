const express = require("express");
const asyncHandler = require("express-async-handler");
const { singleMulterUpload, singlePublicFileUpload } = require("../../awsS3");

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

// *************************************************************
// ******************** PET ROUTES *****************************
// *************************************************************

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const pets = await Pet.findAll();
    res.json(pets);
  })
);

router.get(
  "/user/:userId",
  asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.userId, 10);

    const pets = await Pet.findAll({
      where: { userId },
    });
    res.json(pets);
  })
);

router.get(
  "/:petId",
  asyncHandler(async (req, res, next) => {
    const petId = parseInt(req.params.petId, 10);
    const pet = await Pet.findByPk(petId);

    res.json(pet);
  })
);

router.post(
  "/",
  singleMulterUpload("file"),
  asyncHandler(async (req, res, next) => {
    const { userId, name, species, birthDate } = req.body;
    const photoURL = await singlePublicFileUpload(req.file);
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

router.put(
  "/:petId",
  singleMulterUpload("photoURL"),
  asyncHandler(async (req, res, next) => {
    const petId = parseInt(req.params.petId, 10);
    const petData = req.body;

    const pet = await Pet.findByPk(petId);
    if (pet) {
      if (req.file) {
        petData.photoURL = await singlePublicFileUpload(req.file);
        if (
          req.file.mimetype !== "image/jpeg" &&
          req.file.mimetype !== "image/png"
        ) {
          return next();
        }
      }
      await pet.update(petData);

      res.json(pet);
    } else {
      next();
    }
  })
);

router.delete(
  "/:petId",
  asyncHandler(async (req, res, next) => {
    const petId = parseInt(req.params.petId, 10);
    const pet = await Pet.findByPk(petId);
    if (pet) {
      await pet.destroy();
      res.json(pet);
    } else {
      next();
    }
  })
);

// *************************************************************
// ******************** MEDICATION ROUTES **********************
// *************************************************************

router.post(
  "/meds",
  asyncHandler(async (req, res, next) => {
    const { petId, name, dosage, frequency } = req.body;
    const med = await Medication.create({
      petId,
      name,
      dosage,
      unit,
      frequency,
    });
    res.json(med);
  })
);

router.get(
  "/med/:medId",
  asyncHandler(async (req, res, next) => {
    const medId = parseInt(req.params.medId, 10);
    const med = await Medication.findByPk(medId);

    res.json(med);
  })
);

router.get(
  "/:petId/meds",
  asyncHandler(async (req, res, next) => {
    const petId = parseInt(res.params.petId, 10);
    const meds = await Medication.findAll({
      where: {
        petId,
      },
    });
    res.json(meds);
  })
);

router.put(
  "/meds/:id",
  asyncHandler(async (req, res, next) => {
    const medId = parseInt(req.params.id, 10);
    const medData = req.body;

    const med = await Medication.findByPk(medId);
    if (med) {
      await med.update(medData);

      res.json(med);
    } else {
      next();
    }
  })
);

router.delete(
  "/meds/:id",
  asyncHandler(async (req, res, next) => {
    const medId = parseInt(req.params.id, 10);
    const med = await Medication.findByPk(medId);
    if (med) {
      await med.destroy();
      res.json(med);
    } else {
      next();
    }
  })
);

// *************************************************************
// ******************** VACCINES POST/GET ********************
// *************************************************************

router.post(
  "/vacs",
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
  "/vac/:vacId",
  asyncHandler(async (req, res, next) => {
    const vacId = parseInt(req.params.vacId, 10);
    const vaccine = await Vaccine.findByPk(vacId);

    res.json(vaccine);
  })
);

router.get(
  "/:petId/vacs",
  asyncHandler(async (req, res, next) => {
    const petId = parseInt(req.params.petId, 10);
    const vaccines = await Vaccine.findAll({
      where: {
        petId,
      },
    });
    res.json(vaccines);
  })
);

router.put(
  "/vacs/:id",
  asyncHandler(async (req, res, next) => {
    const petId = parseInt(req.params.id, 10);
    const vaccineData = req.body;

    const vac = await Vaccine.findByPk(petId);
    if (vac) {
      await vac.update(vaccineData);

      res.json(vac);
    } else {
      next();
    }
  })
);

router.delete(
  "/vacs/:id",
  asyncHandler(async (req, res, next) => {
    const vacId = parseInt(req.params.id, 10);
    const vaccine = await Vaccine.findByPk(vacId);
    if (vaccine) {
      await vaccine.destroy();
      res.json(vaccine);
    } else {
      next();
    }
  })
);

// *************************************************************
// ******************** MILESTONES/EVENTS POST/GET ********************
// *************************************************************

router.post(
  "/events",
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
  "/event/:eventId",
  asyncHandler(async (req, res, next) => {
    const eventId = parseInt(req.params.eventId, 10);
    const event = await Milestone.findByPk(eventId);

    res.json(event);
  })
);

router.get(
  "/:petId/events",
  asyncHandler(async (req, res, next) => {
    const petId = parseInt(req.params.petId, 10);
    const events = await Milestone.findAll({
      where: {
        petId,
      },
    });
    res.json(events);
  })
);

router.put(
  "/:petId/events",
  asyncHandler(async (req, res, next) => {
    const petId = parseInt(req.params.petId, 10);
    const eventData = req.body;

    const event = await Milestone.findByPk(petId);
    if (event) {
      await event.update(eventData);

      res.json(event);
    } else {
      next();
    }
  })
);

router.delete(
  "/events/:id",
  asyncHandler(async (req, res) => {
    const eventId = parseInt(req.params.id, 10);
    const event = await Milestone.findByPk(eventId);
    if (event) {
      await event.destroy();
      res.json(event);
    } else {
      next();
    }
  })
);

// *************************************************************
// ******************** GRAPH POST/GET ********************
// *************************************************************

router.post(
  "/graph",
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
  "/graph/:graphId",
  asyncHandler(async (req, res, next) => {
    const graphId = parseInt(req.params.graphId, 10);
    const graph = await Graph.findByPk(graphId);

    res.json(graph);
  })
);

router.get(
  "/:petId/graph",
  asyncHandler(async (req, res, next) => {
    const petId = parseInt(req.params.petId, 10);
    const graphs = await Graph.findAll({
      where: {
        petId,
      },
    });
    res.json(graphs);
  })
);

router.put(
  "/graph/:id",
  asyncHandler(async (req, res, next) => {
    const graphId = parseInt(req.params.id, 10);
    const graphData = req.body;

    const graph = await Graph.findByPk(graphId);
    if (graph) {
      await graph.update(graphData);

      res.json(graph);
    } else {
      next();
    }
  })
);

router.delete(
  "/graph/:id",
  asyncHandler(async (req, res, next) => {
    const graphId = parseInt(req.params.id, 10);
    const graph = await Graph.findByPk(graphId);
    if (graph) {
      await graph.destroy();
      res.json(graph);
    } else {
      next();
    }
  })
);

// *************************************************************
// ******************** APPOINTMENTS POST/GET ********************
// *************************************************************

router.post(
  "/appts",
  asyncHandler(async (req, res, next) => {
    const { petId, datetime, location } = req.body;
    const appointment = await Appointment.create({
      petId,
      datetime,
      location,
      place,
    });
    res.json(appointment);
  })
);

router.get(
  "/appts/:apptId",
  asyncHandler(async (req, res, next) => {
    const apptId = parseInt(req.params.apptId, 10);
    const appointment = await Appointment.findByPk(apptId);

    res.json(appointment);
  })
);

router.get(
  "/:petId/appts",
  asyncHandler(async (req, res, next) => {
    const petId = parseInt(req.params.petId, 10);
    const appts = await Appointment.findAll({
      where: {
        petId,
      },
    });
    res.json(appts);
  })
);

router.put(
  "/appts/:id",
  asyncHandler(async (req, res, next) => {
    const apptId = parseInt(req.params.id, 10);
    const apptData = req.body;

    const appointment = await Appointment.findByPk(apptId);
    if (appointment) {
      await appointment.update(apptData);

      res.json(appointment);
    } else {
      next();
    }
  })
);

router.delete(
  "/appts/:id",
  asyncHandler(async (req, res, next) => {
    const apptId = parseInt(req.params.id, 10);
    const appointment = await Appointment.findByPk(apptId);
    if (appointment) {
      await appointment.destroy();
      res.json(appointment);
    } else {
      next();
    }
  })
);

module.exports = router;
