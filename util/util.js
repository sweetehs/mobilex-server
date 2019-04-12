const jwt = require('jsonwebtoken')
const configjwt = require("../config").jwt
const getUser = function (ctx) {
  try {
    const token = ctx.header.authorization
    var user = {}
    return jwt.verify(token.split(" ")[1] || "none", configjwt)
  } catch (e) {
    throw new Error("user-用户验证失败")
  }
}
module.exports = {
  getUser
}