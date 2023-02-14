const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('mysql:memory:')

module.exports = (sequelize, DataTypes) => {
    const _ratio = sequelize.define('Ratio', {
        ratio_index : {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        stock1_ratio:{
            type: DataTypes.INTEGER,
        },
        stock2_ratio:{
            type: DataTypes.INTEGER,
        },
        stock3_ratio:{
            type: DataTypes.INTEGER,
        },
        stock4_ratio:{
            type: DataTypes.INTEGER,
        },
        stock5_ratio:{
            type: DataTypes.INTEGER,
        },
        stock6_ratio:{
            type: DataTypes.INTEGER,
        },
        stock7_ratio:{
            type: DataTypes.INTEGER,
        },
        stock8_ratio:{
            type: DataTypes.INTEGER,
        },
        stock9_ratio:{
            type: DataTypes.INTEGER,
        },
        stock10_ratio:{
            type: DataTypes.INTEGER,
        }
    },{
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "stock_ratio",
        timestamps: true,
        paranoid: true
    })

    return _ratio
}