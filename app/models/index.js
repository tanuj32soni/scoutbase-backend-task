const Sequelize = require('sequelize')

const CrewMemberSchema = require('./crewmembers')
const MovieSchema = require('./movies')

const dbsettings = {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: 'postgres',
  pool: {
    max: 40,
    min: 0,
    idle: 10000
  },
  define: {
    underscored: true
  }
}

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  dbsettings
)

const CrewMember = CrewMemberSchema(sequelize)
const Movie = MovieSchema(sequelize)

Movie.belongsToMany(CrewMember, { through: 'movie_crew_members', foreignKey: 'movie_id', as: 'crewMembers' })
CrewMember.belongsToMany(Movie, { through: 'movie_crew_members', foreignKey: 'crewmember_id', as: 'movies' })

module.exports = {
  sequelize,
  Movie,
  CrewMember
}
