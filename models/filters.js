const getFilterModel = (sequelize, { DataTypes }) => {
    const Filter = sequelize.define('filters', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            validate: {
                len: [1,15]
            }
        },
        value: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,100]
            }
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1,100],
            }
        }
    })
    return Filter
}

module.exports = getFilterModel