const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')

const app = express()

function initRoutes (app) {
  const server = new ApolloServer({ typeDefs: [gql` type Query { _: Boolean }`], resolvers: { Query: [] } })

  server.applyMiddleware({ app, path: '/graphql' })
}

function init () {
  // Initialize API Routes
  initRoutes(app)

  return app
}

module.exports.init = init
