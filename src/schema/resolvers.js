const knex = require('../core/db/index')

const resolvers = {
  Query: {
    async getUsers () {
      const users = await knex('users').where({ archived: false })

      return users
    }
  },

  Mutation: {
    async createUser (_, { input }) {
      const user = {
        name: input.name,
        email: input.email,
        age: input.age,
        dev: input.dev
      }

      const [createdUser] = await knex('users').insert(user).returning('*')

      return createdUser
    },

    async updateUser (_, { input }) {
      const user = {}

      if (input.name) { user.name = input.name }
      if (input.email) { user.email = input.email }
      if (input.age) { user.age = input.age }
      if (input.dev) { user.dev = input.dev }

      const [updatedUser] = await knex('users').update(user).where({ id: input.id }).returning('*')

      return updatedUser
    },

    async deleteUser (_, args) {
      const id = args.id

      const [deletedUser] = await knex('users').update({ archived: true }).where({ id: id }).returning('*')

      return deletedUser
    }
  }
}

module.exports = { resolvers }
