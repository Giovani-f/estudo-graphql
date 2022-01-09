const knex = require('../core/db/index')

const resolvers = {
  Query: {
    async getUsers () {
      const users = await knex('users')

      return users
    }
  },

  Mutation: {
    async createUser(_, args) {
      console.log('args', args)
      const newUser = args.input;

      await knex('users').insert({
        name: newUser.name,
        age: newUser.age,
        dev: newUser.dev
      }).returning('*');

      return newUser;
    }
  }
}

module.exports = { resolvers }