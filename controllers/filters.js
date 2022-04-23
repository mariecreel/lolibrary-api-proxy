const db = require('../models/index')

// return all filters
const allFiltersController = async (req, res) => {
    const resBody = {}
    const [sequelize, models] = db.connectDb()
    const values = await models.Filter.findAll({
        attributes: ['type', 'value']
    })
    values.forEach(result => {
        if (typeof resBody[result.type] == 'undefined') {
            resBody[result.type] = []
        }
        resBody[result.type].push(result.value)
    })
    res.status(200).json(resBody)
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