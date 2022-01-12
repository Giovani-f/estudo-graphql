exports.seed = (knex) => {
  return knex('users').del()
    .then(() => {
      return knex('users').insert([
        {
          id: '2f520e47-6936-4a86-8ba1-5aebd8a39831',
          name: 'Giovani',
          email: "giovani@teste.com.br",
          age: 20,
          dev: true,
          archived: false
        },
        {
          id: '4f894eba-db64-4a1d-a80d-66ec56e7bf78',
          name: 'Giovanna',
          email: "giovanna@teste.com.br",
          age: 20,
          dev: false,
          archived: true
        }
      ]);
    });
};