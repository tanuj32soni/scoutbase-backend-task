const http = require('http')
const express = require('express')
const onTerminationShutGracefully = require('./shutdown')

const database = require('./sequelize')

async function start () {
  await database.connect()

  const app = express()

  app.get('/graphql', (req, res) => {
    res.status(200).send({ message: 'Server Started!' })
  })

  const server = http.createServer(app).listen(process.env.PORT)

  onTerminationShutGracefully(server)

  return 'Server Started!'
}

module.exports = start
