const path = require("path")
const fs = require("fs")
const asyncBusboy = require('async-busboy');
const router = require('koa-router')()

router.post('/mobilex/upload', async (ctx) => {
  const {
    files
  } = await asyncBusboy(ctx.req)
  const file = files[0]
  const filename = file.filename.replace(/\s/g,"")
  var toFile = fs.createWriteStream(path.join(__dirname, '../public/images/' + filename));
  file.pipe(toFile)
  await new Promise((resolve, reject) => {
    file.on("end", () => {
      resolve()
    })
  })
  ctx.body = {
    url: "/images/" + filename
  }
})
module.exports = router