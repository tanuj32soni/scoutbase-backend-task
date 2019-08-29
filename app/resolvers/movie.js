const _ = require('lodash')
const Movie = require('../models').Movie

const MovieResolver = async () => {
  const movies = await Movie.findAll({
    include: ['crewMembers'],
    attributes: { exclude: ['scoutbase_rating'] }
  })
  const response = _.forEach(movies, movie => {
    const [directors, actors] = _.partition(movie.crewMembers, ['role', 'DIRECTOR'])
    return _.assign(movie, { directors, actors })
  })
  return response
}

module.exports = MovieResolver
