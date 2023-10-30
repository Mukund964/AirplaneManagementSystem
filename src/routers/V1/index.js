const express = require('express');
const router = express.Router();

const {cityController,flightController} = require('../../controllers/index');

router.get('/city/:id',cityController.fetch);
router.post('/city',cityController.create);
router.post('/cities',cityController.createMany)
router.patch('/city/:id',cityController.update);
router.get('/cities',cityController.findall);
router.delete('/city/:id',cityController.remove);

router.post('/flights',flightController.createFlight);
router.get('/flight/:id',flightController.getFlight);
router.get('/flights',flightController.findFlights)

module.exports = router;
