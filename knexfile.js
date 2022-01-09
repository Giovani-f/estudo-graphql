require('dotenv').config()

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DB_DATABASE,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      port: process.env.DB_PORT
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/core/db/migrations`
    },
    seeds: {
      directory: `${__dirname}/src/core/db/seeds`
    }
  }
};