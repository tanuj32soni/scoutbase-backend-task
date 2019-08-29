const MovieResolver = require('./movie')
const { CreateUserResolver } = require('./user')

module.exports = {
  Query: {
    movies: MovieResolver
  },
  Mutation: {
    createUser: CreateUserResolver
  }
}
