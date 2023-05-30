const jwt = require('jsonwebtoken')
const jwt_decode = require('jwt-decode')

function createToken(user) {
    const secret = '12345asd'
    const dataStoredInToken = { _id: user._id }
    return jwt.sign(dataStoredInToken, secret)
}

function createCookie(token) {
    `Bearer ${token}`
}

module.exports = { createToken, createCookie }