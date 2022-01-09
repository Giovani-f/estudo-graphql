exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          name: 'Giovani',
          age: 20,
          dev: true
        },
        {
          name: 'Giovanna',
          age: 20,
          dev: false
        }
      ]);
    });
};