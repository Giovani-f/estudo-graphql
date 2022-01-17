const connectionString = 'postgres://postgres:test@localhost/postgres'
const { Client } = require('pg')

async function run () {
  const client = new Client(connectionString)
  try {
    await client.connect()
    await client.query(/* sql */ `
      SELECT pg_terminate_backend(pg_stat_activity.pid)
      FROM pg_stat_activity
      WHERE pg_stat_activity.datname in ('graphql') AND pid <> pg_backend_pid();
    `)

    await client.query('DROP DATABASE IF EXISTS graphql;')
    await client.query('CREATE DATABASE graphql;')
    console.log('[✓] created database graphql')
  } finally {
    client && await client.end()
  }
}

run()
