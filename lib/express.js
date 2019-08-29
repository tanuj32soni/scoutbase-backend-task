const _ = require('lodash')
const express = require('express')
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('../app/types')
const resolvers = require('../app/resolvers')
const User = require('../app/models').User

const app = express()

function initRoutes (app) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async ({ req }) => {
      if (req.headers.authorization) {
        const splits = _.split(req.headers.authorization, ' ')
        const components = _.filter(splits, string => !_.chain(string).trim().isEmpty().value())
        if (_.chain(components).size().eq(2).value() && _.isString(components[0]) && _.eq(components[0].toLowerCase(), 'bearer') && _.isString(components[1]) && _.size(components[1], 50)) {
          const user = await User.findOne({ where: { token: components[1] } })
          return {
            user
          }
        }
      }
    }
  })

  server.applyMiddleware({ app, path: '/graphql' })
}

function init () {
  // Initialize API Routes
  initRoutes(app)

  return app
}

module.exports.init = init
