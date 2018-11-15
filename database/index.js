const mysql = require('mysql');
const seq = require ('sequelize');
const postgres = require('pg');
const { env } = require('../env/.env');

const connectionPostgres = new seq(env.database, env.dbHost, env.dbPassword, {
  host: env.HOSTNAME,
  dialect: 'postgres'
});

connectionPostgres
  .authenticate()
  .then(() => console.log('connect to postgres!'))
  .catch(err => console.error(err));

module.exports.postgres = connectionPostgres;
