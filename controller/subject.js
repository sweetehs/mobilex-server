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
const subjectUpdateById = async function (id, cover, data) {
  return subjectDB.updateOne({
    _id: new ObjectId(id)
  }, {
    $set: {
      cover: cover,
      data: data
    }
  }).then((result) => {
    if (result.n == 0) {
      throw new Error("修改数据失败")
    } else {
      Promise.resolve()
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