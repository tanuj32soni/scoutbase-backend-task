/* eslint no-tabs: 0 */

const { gql } = require('apollo-server-express')

const UserType = gql`
type User {
  id: ID!
  name: String!
}

type TokenDetails {
  token: String!
  user: User!
}
`

module.exports = UserType
