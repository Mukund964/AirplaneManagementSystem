const express = require('express');
const router = express.Router();

const {cityController,flightController,AirportController} = require('../../controllers/index');
const {flightMiddleware} = require('../../middlewares/index');

router.get('/city/:id',cityController.fetch);
router.post('/city',cityController.create);
router.post('/cities',cityController.createMany)
router.patch('/city/:id',cityController.update);
router.get('/cities',cityController.findall);
router.delete('/city/:id',cityController.remove);

router.post('/flights',flightMiddleware.validateCreateFlight,flightController.createFlight);
router.get('/flight/:id',flightController.getFlight);
router.get('/flights',flightController.findFlights)

router.post('/airports',AirportController.create);
router.get('/airports/:id',AirportController.get);
router.patch('/airports/:id',AirportController.update);
router.delete('/airports/:id', AirportController.destroy);
router.get('/airports',AirportController.getAll);
module.exports = router;
