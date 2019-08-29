/* eslint no-tabs: 0 */

const { gql } = require('apollo-server-express')

const MovieType = gql`
type Crew {
  name: String!,
  birthday: String!,
  country: String!,
}

type Movie {
  scoutbase_rating: Float!
  title: String!,
  year: String!,
  rating: Float!,
  actors: [Crew!]!,
  directors: [Crew!]!
}
`

module.exports = MovieType
