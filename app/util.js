const crypto = require('crypto')

function createHash (string, salt) {
  return crypto.pbkdf2Sync(
    string,
    salt,
    parseInt(process.env.HASH_ITERATION),
    parseInt(process.env.HASH_LENGTH),
    parseInt(process.env.HASH_ALGO)
  ).toString('hex')
}

function generateToken(size) {
  return crypto.randomBytes(size).toString('hex')
}

module.exports = { createHash, generateToken }
