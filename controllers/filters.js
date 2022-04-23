const db = require('../models/index')

// return all filters
const allFiltersController = async (req, res) => {
    const resBody = {}
    const [sequelize, models] = db.connectDb()
    const values = await models.Filter.findAll({
        attributes: ['type', 'value']
    })
    db.disconnectDb(sequelize)
    values.forEach(result => {
        if (typeof resBody[result.type] == 'undefined') {
            resBody[result.type] = []
        }
        resBody[result.type].push(result.value)
    })
    res.status(200).json(resBody)
}
// return values for a specific filter
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
    db.disconnectDb(sequelize)
    values.forEach(result => {
        resBody[filterType].push(result.value)
    })
    res.status(200).json(resBody)
}

module.exports = {
    filterController: filterController,
    allFiltersController: allFiltersController
}