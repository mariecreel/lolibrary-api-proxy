const Sequelize = require('sequelize')
const Filter = require('filter')

const sequelize = new Sequelize(process.env.DATABASE_URL + '?sslmode=no-verify')

sequelize.authenticate().then(() => {
    console.log('postgreSQL authorized')
}).catch((err) => {
    console.log(err)
})

module.exports = sequelize;