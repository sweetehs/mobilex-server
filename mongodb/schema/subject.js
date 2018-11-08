const mongoose = require('mongoose')
const SubjectSchema = new mongoose.Schema({
  name: String,
  data: Object
});
module.exports = mongoose.model('Subject', SubjectSchema);