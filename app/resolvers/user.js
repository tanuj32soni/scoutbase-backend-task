const { of } = require('await-of')
const { UserInputError, AuthenticationError } = require('apollo-server-express')

const User = require('../models').User
const { generateToken } = require('../util')

const CreateUserResolver = async (parent, { username, password }) => {
  const token = generateToken(50)
  const [user, error] = await of(User.create({ username, password, token }))

  if (error && error.name === 'SequelizeUniqueConstraintError') {
    if (error.errors && error.errors[0] && error.errors[0].message === 'username must be unique') {
      throw new UserInputError('Username already exists!')
    }
    throw new UserInputError('Incorrect Information Entered')
  }

  return {
    token,
    user: {
      id: user.id,
      name: user.username
    }
  }
}

const LoginResolver = async (parent, { username, password }) => {
  const token = generateToken(50)
  const [[updated, update], error] = await of(
    User.update({ token }, { where: { username, password }, returning: true })
  )

  if (updated === 0 || error) {
    throw new AuthenticationError('User Not Found!')
  }

  const user = update[0]

  return {
    token: token,
    user: {
      id: user.id,
      name: user.username
    }
  }
}

module.exports = { CreateUserResolver, LoginResolver }
