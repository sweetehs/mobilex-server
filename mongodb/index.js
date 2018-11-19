const mongoose = require('mongoose')
const config = require('../config').mongodb
const DB_URL = `mongodb://${config.host}:${config.port}/${config.db}`
mongoose.connect(DB_URL, {
  useNewUrlParser: true
})

mongoose.connection.on('connected', function () {
  console.log('链接成功' + DB_URL);
});
mongoose.connection.on('error', function (err) {
  console.log('连接失败' + err);
});
mongoose.connection.on('disconnected', function () {
  console.log('链接断开');
});