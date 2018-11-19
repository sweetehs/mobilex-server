const userDB = require("../mongodb/schema/user")
const ObjectId = require('mongodb').ObjectId;

const userAdd = async function (data) {
  return userDB.create(data)
}
const userGetById = async function (username) {
  return userDB.findOne({
    username
  })
}
module.exports = {
  userAdd,
  userGetById
}