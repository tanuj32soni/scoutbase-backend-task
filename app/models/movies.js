const Sequelize = require('sequelize')

const MovieSchema = (sequelize) => {
  return sequelize.define('movie', {
    scoutbase_rating: {
      type: Sequelize.DECIMAL(2, 1),
      allowNull: false,
      required: true,
      validate: { min: 5.0, max: 9.0 }
    },
    title: {
      type: Sequelize.STRING(50),
      allowNull: false,
      required: true
    },
    year: {
      type: Sequelize.INTEGER,
      allowNull: false,
      required: true
    },
    rating: {
      type: Sequelize.INTEGER,
      allowNull: false,
      required: true,
      validate: { min: 1, max: 10 }
    }
  })
}

module.exports = MovieSchema
