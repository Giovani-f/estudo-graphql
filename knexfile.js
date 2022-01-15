const path = require('path')
require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:test@localhost/graphql' || {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT
    },
    pool: {
      min: 0,
      max: 1,
      afterCreate: function (conn, callback) {
        conn.query('SET timezone="UTC"; CREATE EXTENSION IF NOT EXISTS "uuid-ossp";', callback)
      }
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: path.join(__dirname, '/migrations')
    },
    seeds: {
      directory: path.join(__dirname, '/seeds')
    }
  }
}
