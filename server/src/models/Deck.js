const { sequelize } = require('../db/config');
const { DataTypes} = require('sequelize');




const Deck = sequelize.define('Deck',{
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER

});

module.exports = {
    Deck
};