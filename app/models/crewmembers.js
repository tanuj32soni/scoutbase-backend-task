const Sequelize = require('sequelize')

const CrewMemberSchema = (sequelize) => {
  return sequelize.define('crew_member', {
    name: {
      type: Sequelize.STRING(30),
      allowNull: false,
      required: true
    },
    birthday: {
      type: Sequelize.DATE(50),
      allowNull: false,
      required: true
    },
    country: {
      type: Sequelize.STRING(20),
      allowNull: false,
      required: true
    },
    role: {
      type: Sequelize.ENUM('ACTOR', 'DIRECTOR'),
      allowNull: false,
      required: true,
      defaultValue: 'ACTOR'
    }
  })
}

module.exports = CrewMemberSchema
