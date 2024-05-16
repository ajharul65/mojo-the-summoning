const { db } = require('../db/config');
const { DataTypes} = require('sequelize');




const Attack = db.define( 'Attack',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    title: DataTypes.STRING,
    mojoCost: DataTypes.INTEGER,
    staminaCost: DataTypes.INTEGER,
    

});

module.exports = {
    Attack
};