exports.up = async knex => knex.schema.createTable('users', table => {
  table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
  table.string('name').notNullable()
  table.string('email').notNullable()
  table.integer('age').notNullable()
  table.boolean('dev').notNullable().defaultTo(false)
  table.timestamp('created_at').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTable('users')
