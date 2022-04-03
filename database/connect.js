const Sequelize = require('sequelize')
const sequelize = new Sequelize(process.env.DATABASE_URL)

sequelize.authenticate().then(() => {
    console.log("yay! sqlize authenticated ^_^~<3")
}).catch(err => {
    console.log(err)
})

module.exports = sequelize;