const mongoose = require('mongoose')
const SubjectSchema = new mongoose.Schema({
  data: Object
});
const Subject = mongoose.model('Subject', SubjectSchema);
module.exports = Subject