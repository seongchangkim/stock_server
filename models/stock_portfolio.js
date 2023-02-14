const { Sequelize, DataTypes } = require('sequelize')
const sequelize = new Sequelize('mysql:memory:')

module.exports = (sequelize, DataTypes) => {
    const _stock = sequelize.define('Port', {
        port_index : {
            type: DataTypes.BIGINT(11),
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        initial_price:{
            type: DataTypes.BIGINT(11),
            allowNull: false
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        writer: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        stock1:{
            type: DataTypes.STRING(10),
        },
        stock2:{
            type: DataTypes.STRING(10),
        },
        stock3:{
            type: DataTypes.STRING(10),
        },
        stock4:{
            type: DataTypes.STRING(10),
        },
        stock5:{
            type: DataTypes.STRING(10),
        },
        stock6:{
            type: DataTypes.STRING(10),
        },
        stock7:{
            type: DataTypes.STRING(10),
        },
        stock8:{
            type: DataTypes.STRING(10),
        },
        stock9:{
            type: DataTypes.STRING(10),
        },
        stock10:{
            type: DataTypes.STRING(10),
        }
    },{
        charset: "utf8",
        collate: "utf8_general_ci",
        tableName: "stock_port",
        timestamps: true,
        paranoid: true
    })

    _stock.associate = function(models){
        models.Port.hasOne(models.Ratio, {
            foreignKey: "stock_ratio_id",
            onDelete: "cascade",
        });
    }
    
    return _stock
}