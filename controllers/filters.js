const db = require('../models/index')

// return all filters
const allFiltersController = (req, res) => {
    const filters = {}
}

const filterController = async (req, res) => {
    const resBody = {}
    const filterType = req.params['name']
    resBody[filterType] = []
    const [sequelize, models] = db.connectDb()
    const values = await models.Filter.findAll({
        attributes: ['value'],
        where: {
            type: filterType
        }
    })
    values.forEach(result => {
        resBody[filterType].push(result.value)
    })
    res.status(200).json(resBody)
}

module.exports = {
    filterController: filterController,
    allFiltersController: allFiltersController
}