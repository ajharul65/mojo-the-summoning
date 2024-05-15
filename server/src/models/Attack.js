const { sequelize } = require('../db/config');
const { DataTypes} = require('sequelize');




const Attack = sequelize.define( 'Attack',{
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
    

});

module.exports = {
    Attack
};