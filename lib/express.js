const express = require('express')

const app = express()

function initRoutes (app) {
  app.get('/graphql', (req, res) => {
    res.status(200).send({ message: 'Server Started!' })
  })
}

function init () {
  // Initialize API Routes
  initRoutes(app)

  return app
}

module.exports.init = init
