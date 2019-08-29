const User = require('../models').User
const { generateToken } = require('../util')

const CreateUserResolver = async (parent, { username, password }) => {
  const token = generateToken(50)
  const user = await User.create({ username, password, token });

  return {
    token: generateToken(50),
    user: {
      id: user.id,
      name: user.username
    }
  }
}

module.exports = { CreateUserResolver }
