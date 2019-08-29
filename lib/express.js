const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const types = require('../app/types')
const resolvers = require('../app/resolvers')

const app = express()

function initRoutes (app) {
  const server = new ApolloServer({ typeDefs: types, resolvers })

  server.applyMiddleware({ app, path: '/graphql' })
}

function init () {
  // Initialize API Routes
  initRoutes(app)

  return app
}

module.exports.init = init
