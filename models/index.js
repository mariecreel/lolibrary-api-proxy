const Sequelize = require('sequelize')
const getFilterModel = require('./filter')

const connectDb = () => {
    const sequelize = new Sequelize(process.env.DATABASE_URL + '?sslmode=no-verify')

    sequelize.authenticate().then(() => {
        console.log('successfully connected to database')
    }).catch(err => {
        throw new Error(err)
    })

    const models = {
        Filter: getFilterModel(sequelize, Sequelize),
    }

    return [sequelize, models]
}

const disconnectDb = (sequelize) => {
    sequelize.close().then(() => {
        console.log(sequelize)
    })
}

module.exports = {
    connectDb: connectDb,
    disconnectDb: disconnectDb
}