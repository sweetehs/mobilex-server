const jwt = require('jsonwebtoken')
const configjwt = require("../config").jwt
const getUser = function(ctx){
  const token = ctx.header.authorization
  var user = {}
  if (token) {
    return jwt.verify(token.split(" ")[1] || "none", configjwt)
  } else {
    throw new Error("用户验证失败")
  }
}
module.exports = {
  getUser
}