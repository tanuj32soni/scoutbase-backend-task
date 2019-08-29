const { of } = require('await-of')
const { UserInputError } = require('apollo-server-express');

const User = require('../models').User
const { generateToken } = require('../util')

const CreateUserResolver = async (parent, { username, password }) => {
  const token = generateToken(50)
  const [user, error] = await of(User.create({ username, password, token }));

  if(error.name === 'SequelizeUniqueConstraintError') {
    if(error.errors && error.errors[0] && error.errors[0].message == 'username must be unique')
      throw new UserInputError('Username already exists!')
    throw new UserInputError('Incorrect Information Entered')
  }

  return {
    token: generateToken(50),
    user: {
      id: user.id,
      name: user.username
    }
  }
}

module.exports = { CreateUserResolver }
