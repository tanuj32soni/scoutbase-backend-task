const _ = require('lodash')
const Movie = require('../models').Movie

const MovieResolver = async (parent, argument, { user }) => {
  const options = { include: ['crewMembers'] }
  if (!user) {
    options.attributes = { exclude: ['scoutbase_rating'] }
  }
  const movies = await Movie.findAll(options)
  const response = _.forEach(movies, movie => {
    const [directors, actors] = _.partition(movie.crewMembers, ['role', 'DIRECTOR'])
    return _.assign(movie, { directors, actors })
  })
  return response
}

module.exports = MovieResolver
