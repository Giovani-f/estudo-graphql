const { ApolloServer } = require('apollo-server-express')
const express = require('express')
const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const { constraintDirective, constraintDirectiveTypeDefs } = require('graphql-constraint-directive')

const app = express()

let schema = makeExecutableSchema({
  typeDefs: [
    typeDefs,
    constraintDirectiveTypeDefs
  ],
  resolvers
})
schema = constraintDirective()(schema)

async function startApolloServer () {
  const server = new ApolloServer({
    schema,
    playground: true
  })

  await server.start()
  server.applyMiddleware({ app })
}

startApolloServer()

module.exports = { app }
