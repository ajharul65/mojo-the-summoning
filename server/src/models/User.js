// create your User model here
const { sequelize } = require('../db/config');
const { DataTypes} = require('sequelize');




const User = sequelize.define('User',{
    id: DataTypes.INTEGER,
    username: DataTypes.STRING

}
);

module.exports = {
    User
};