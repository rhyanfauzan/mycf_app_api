// /src/config/db.js

const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'mysql',
  host: 'localhost',
  username: 'u1024490_cfadmin24', // your MySQL username
  password: 'cfadmin24', // your MySQL password
  database: 'u1024490_mycf_app',
  pool: {
    max: 10, // maximum number of connections in the pool
    min: 0, // minimum number of connections in the pool
    acquire: 30000, // maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000 // maximum time, in milliseconds, that a connection can be idle before being released
  }
});

module.exports = sequelize;
