const express = require('express')
const app = express()

app.get('/graphql', (req, res) => {
  res.status(200).send({ message: 'Server Started!' })
})

app.listen(3000, () => console.log('Server Started!')) // eslint-disable-line no-console
