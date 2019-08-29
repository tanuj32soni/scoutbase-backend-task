const MovieResolver = require('./movie')
const { CreateUserResolver, LoginResolver } = require('./user')

module.exports = {
  Query: {
    movies: MovieResolver
  },
  Mutation: {
    createUser: CreateUserResolver,
    login: LoginResolver
  }
}
