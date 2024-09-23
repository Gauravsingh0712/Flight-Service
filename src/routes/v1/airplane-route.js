const express = require('express');

const { AirplaneController } = require('../../controllers')
const { AirplaneMiddlewares } = require('../../middlewares')
const router = express.Router()

//POST REQUEST
// First it will validate through middleware and then call the controller function
router.post('/',
    AirplaneMiddlewares.validateCreateRequest,
    AirplaneController.createAirplane)

module.exports = router;