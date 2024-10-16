const { StatusCodes } = require('http-status-codes')
const { FlightService } = require('../services');
const { ErrorResponse, SuccessResponse } = require('../utils/common')

/**
 * 
 * POST : /flights
 * req body {
 *  flightNumber: 'UK 808',
 *  airplaneId: 'a303',
 *  departureAirportId: '12',
 *  arrivalAirportId: '11',
 *  arrivalTime: '11:00:00',
 *  departureTime: '09:00:00',
 *  price: 2000,
 *  boardingGate: '12A',
 *  totalSeats: 130
 * }
 */
async function createFlight(req, res) {
    try {
        const flight = await FlightService.createFlight({
            flightNumber: req.body.flightNumber,
            airplaneId: req.body.airplaneId,
            departureAirportId: req.body.departureAirportId,
            arrivalAirportId: req.body.arrivalAirportId,
            arrivalTime: req.body.arrivalTime,
            departureTime: req.body.departureTime,
            price: req.body.price,
            boardingGate: req.body.boardingGate,
            totalSeats: req.body.totalSeats,
        });
        SuccessResponse.data = flight
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse)
    } catch (error) {
        ErrorResponse.error = error
        return res
            .status(StatusCodes.INTERNAL_SERVER_ERROR)
            .json(ErrorResponse)
    }
}

async function getAllFlights(req, res) {
    try {
        const flights = await FlightService.getAllFlights(req.query);
        SuccessResponse.data = flights;
        return res
            .status(StatusCodes.CREATED)
            .json(SuccessResponse);
    } catch (error) {
        ErrorResponse.error = error;
        return res
            .status(error.statusCode)
            .json(ErrorResponse);
    }
}

module.exports = {
    createFlight,
    getAllFlights
};
