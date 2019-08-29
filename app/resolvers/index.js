const MovieResolver = require('./movie')

module.exports = {
  Query: {
    movies: MovieResolver
  }
}
