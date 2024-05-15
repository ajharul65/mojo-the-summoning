const { sequelize } = require('../db/config');
const { DataTypes} = require('sequelize');




const Card = sequelize.define('Card',{
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    mojo: DataTypes.INTEGER,
    stamina: DataTypes.INTEGER,
    imgUrl: DataTypes.STRING

});

module.exports = {
    Card
};