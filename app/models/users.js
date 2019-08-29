const Sequelize = require('sequelize')
const createHash = require('../util').createHash

function hashWhereClause (user) {
  if (user.where) {
    if (user.where.password) {
      user.where.password = createHash(user.where.password, process.env.PASSWORD_SALT)
    }
    if (user.where.token) {
      user.where.token = createHash(user.where.token, process.env.TOKEN_SALT)
    }
  }
}

const UserSchema = (sequelize) => {
  return sequelize.define('user', {
    username: {
      type: Sequelize.STRING(20),
      allowNull: false,
      required: true,
      unique: true
    },
    password: {
      type: Sequelize.TEXT,
      allowNull: false,
      required: true,
      unique: false,
      set (password) {
        this.setDataValue('password', createHash(password, process.env.PASSWORD_SALT))
      }
    },
    token: {
      type: Sequelize.TEXT,
      allowNull: false,
      required: true,
      unique: false,
      set (token) {
        this.setDataValue('token', createHash(token, process.env.TOKEN_SALT))
      }
    }
  }, {
    hooks: {
      beforeFind: hashWhereClause,
      beforeBulkUpdate: hashWhereClause
    }
  })
}

module.exports = UserSchema
