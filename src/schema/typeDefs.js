const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type User {
    id: ID!
    name: String! @constraint(maxLength: 120)
    email: String!
    age: Int!
    dev: Boolean!,
    archived: Boolean!
  }

  input UserInput {
    name: String!
    email: String!
    age: Int!
    dev: Boolean!
  }

  input UpdateUserInput {
    id: ID!
    name: String
    email: String
    age: Int
    dev: Boolean
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    createUser(input: UserInput): User!
    updateUser(input: UpdateUserInput): User!
    deleteUser(id: ID!): User!
  }
`

module.exports = { typeDefs }
