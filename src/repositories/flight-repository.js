const CrudRepository = require('./crud-repository')
const { Flight } = require('../models')

class FlightRepository extends CrudRepository {
    constructor() {
        super(Flight)
    }

    async getAllFights(filter) {
        const response = await Flight.findAll({
            where: filter,
            order: sort
        })
        return response;
    }
}
module.exports = FlightRepository;