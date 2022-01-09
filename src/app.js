const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { typeDefs } = require('./schema/typeDefs')
const { resolvers } = require('./schema/resolvers')

const app = express();

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true
  });

  await server.start()
  server.applyMiddleware({ app });
}

startApolloServer()

module.exports = { app }