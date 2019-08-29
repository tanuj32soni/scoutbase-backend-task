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

type Mutation {
  createUser(
    username: String!
    password: String!
  ): TokenDetails!
}
`

module.exports = UserType
