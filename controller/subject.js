const subjectDB = require("../mongodb/schema/subject")
const ObjectId = require('mongodb').ObjectId;
const subjectAdd = async function (data) {
  return subjectDB.create(data);
}
const subjectGetAll = async function () {
  return subjectDB.find()
}
const subjectRemoveById = async (id) => {
  return subjectDB.deleteOne({
    _id: new ObjectId(id)
  })
}
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
  subjectAdd,
  subjectGetAll,
  subjectRemoveById,
  subjectGetById,
  subjectUpdateById
}