exports.up = async knex => knex.schema.createTable('users', table => {
  table.increments('id');
  table.string('name').notNullable();
  table.integer('age').notNullable();
  table.boolean('dev').notNullable().defaultTo(false);
  table.timestamp('created_at').defaultTo(knex.fn.now())
})

exports.down = async knex => knex.schema.dropTable('users');