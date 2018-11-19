const mongoose = require('mongoose')
const SubjectSchema = new mongoose.Schema({
  userid: String,
  name: String,
  cover: String,
  data: Object
});
module.exports = mongoose.model('Subject', SubjectSchema);