const { db } = require('../db/config');
const { DataTypes} = require('sequelize');




const Deck = db.define('Deck',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name: DataTypes.STRING,
    xp: DataTypes.INTEGER

});

module.exports = {
    Deck
};