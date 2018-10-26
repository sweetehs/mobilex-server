const subjectDB = require("../mongodb/schema/subject")
const ObjectId = require('mongodb').ObjectId;
const subjectGetById = function (id) {
  return subjectDB.findOne({
    _id: new ObjectId(id)
  })
}
const subjectUpdateById = async function (id, data) {
  return subjectDB.update({
    _id: new ObjectId(id)
  }, {
    $set: {
      data: data
    }
  })
}
module.exports = {
  subjectGetById,
  subjectUpdateById
}