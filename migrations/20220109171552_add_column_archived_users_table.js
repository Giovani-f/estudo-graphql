exports.up = knex => {
  return knex.schema.table('users', table => {
    table.boolean('archived')
      .notNullable()
      .defaultTo(false)
  })
}

exports.down = knex => {
  return knex.schema.table('users', table => {
    table.dropColumn('archived')
  })
}