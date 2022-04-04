const Sequelize = require('sequelize')
const getFilterModel = require('./filters')

const connectDb = () => {
    const sequelize = new Sequelize(process.env.DATABASE_URL + '?sslmode=no-verify')

    const models = {
        Filter: getFilterModel(sequelize, Sequelize),
    }

    return [sequelize, models]
}

const disconnectDb = (sequelize) => {
    sequelize.close()
}

module.exports = {
    connectDb: connectDb,
    disconnectDb: disconnectDb
}