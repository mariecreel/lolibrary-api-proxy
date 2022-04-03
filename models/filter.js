const getFilterModel = (sequelize, { DataTypes }) => {
    const Filter = sequelize.define('Filter', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            validate: {
                max: 15,
                allowEmpty: false
            }
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 100,
                allowEmpty: false
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                max: 100,
                allowEmpty: false
            }
        }
    })
    return Filter
}

module.exports = getFilterModel