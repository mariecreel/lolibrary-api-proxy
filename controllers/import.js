const db = require('../models/index')

const importController = async (req, res) => {
    if (req.body && Object.keys(req.body).length) {
        //connect db
        const [sequelize, models] = db.connectDb()
        // create table, drop existing one if necessary
        // we want to make sure this data is fresh!
        models.Filter.sync({ force: true })

        const bulkInsertData = _createBulkInsertData(req.body)
        // insert data into DB
        const filters = await models.Filter.bulkCreate(bulkInsertData, { validate: true })

        if (filters.length < 300){
            console.warn(`The number of filters is ${filters.length}, which is less than half of what we expect.`)
        }
        //close connection
        db.disconnectDb(sequelize)

        res.send('Import complete.')
    } else {
        res.status(400).send('No import data sent!')
    }
}
// returns an array of key: value hashes to be bulk inserted into the filters table
// the key should correspond to the filter type, and value should be filter value
// see models/filters.js for model definition.
const _createBulkInsertData = reqBody => {
    const bulkInsertData = []
    for (const key of Object.keys(reqBody)) {
        for (const val of reqBody[key]) {
            if (key.length && val.length) {
                bulkInsertData.push({

                    type: key,
                    value: val
                })
            }
        }
    }
    return bulkInsertData
}

module.exports = importController