const { Sequelize, DataTypes } = require('sequelize')

const Filter = sequelize.define('Filter', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    value: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ['[a-z]', 'i'], // only letters
            max: 100
        }
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            is: ['[a-z]', 'i'], // only letters
            max: 100
        }
    }
})

module.exports = Filter