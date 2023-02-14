const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('mysql:memory:')

module.exports = (sequelize, DataTypes) => {
    const _auth = sequelize.define('Auth', {
        user_index : {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        role : {
            type: DataTypes.INTEGER(2),
            allowNull: false,
            defaultValue: 0
        },
    },{
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "auth",
        timestamps: true,
        paranoid: true
    })

    return _auth
}