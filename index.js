require('dotenv').config()

const app = require('./lib')

const SUCCESS_MESSAGE = 'Server started!'

app.start()
  .then(() => {
    app.logger.info(SUCCESS_MESSAGE)
  })
  .catch(error => {
    app.logger.error(error.message)
  })
