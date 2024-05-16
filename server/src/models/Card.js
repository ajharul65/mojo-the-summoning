const { db } = require('../db/config');
const { DataTypes} = require('sequelize');




const Card = db.define('Card',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING

});

module.exports = {
    Card
};