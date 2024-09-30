const express = require('express');

const { AirplaneController } = require('../../controllers')
const { AirplaneMiddlewares } = require('../../middlewares')
const router = express.Router()

// api/v1/airplanes
// First it will validate through middleware and then call the controller function
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane)

// api/v1/airplanes
router.get('/', AirplaneController.getAirplanes)

module.exports = router;