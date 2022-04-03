const Sequelize = require('sequelize')

const sequelize = new Sequelize(process.env.DATABASE_URL + '?sslmode=no-verify')

sequelize.authenticate().then(() => {
    console.log('postgreSQL authorized')
}).catch((err) => {
    console.log(err)
})