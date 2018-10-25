const mongoose = require('mongoose')
const connString = 'mongodb://localhost:27017/local'
mongoose.connect(connString, {
  useNewUrlParser: true
}).then(() => {
  console.log('mongoDB 链接成功')
}).catch((err) => {
  console.error(error)
})