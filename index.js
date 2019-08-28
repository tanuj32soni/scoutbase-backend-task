require('dotenv').config()

const express = require('express')
const app = express()

app.get('/graphql', (req, res) => {
  res.status(200).send({ message: 'Server Started!' })
})

app.listen(process.env.PORT, () => console.log('Server Started!')) // eslint-disable-line no-console
