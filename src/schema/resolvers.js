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
      const { name, age, dev } = args.input;

      await knex('users').insert({
        name,
        age,
        dev
      })

      return { name, age, dev }
    }
  }
}

module.exports = { resolvers }