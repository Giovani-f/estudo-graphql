const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    age: Int!
    dev: Boolean!
  }

  input UserInput {
    name: String!
    age: Int!
    dev: Boolean!
  }

  type Query {
    getUsers: [User!]!
  }

  type Mutation {
    createUser(input: UserInput): User!
  }
`

module.exports = { typeDefs }