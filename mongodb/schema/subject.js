const mongoose = require('mongoose')
const SubjectSchema = new mongoose.Schema({
  name: String,
  data: Object
});
const Subject = mongoose.model('Subject', SubjectSchema);
module.exports = Subject