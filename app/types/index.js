/* eslint no-tabs: 0 */

const { gql } = require('apollo-server-express')

const MovieType = require('./movie')
const UserType = require('./user')

const QueryType = gql`
type Query {
  movies: [Movie]
}
`

module.exports = [MovieType, UserType, QueryType]
