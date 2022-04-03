const sequelize = require('../models/index').sequelize
const db = require('../models/index')

const filterImport = (reqBody) => {
    //connect db
    [db, models] = db.connectDb()

    //close connection
    db.disconnectDb(db)

}