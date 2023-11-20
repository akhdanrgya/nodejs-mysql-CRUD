const { Sequelize } = require('sequelize')

const sequelize = new Sequelize ('db1', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = sequelize

