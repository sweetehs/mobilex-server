const router = require('koa-router')()
const controllerSubject = require("../controller/subject")


router.get('/mobilex/subject/get', async (ctx, next) => {
  const subjuect = await controllerSubject.subjectGetById('5bd29730e3cd3d3c7387b36d')
  ctx.body = subjuect
})
router.post('/mobilex/subject/update', async (ctx, next) => {
  const {
    id,
    subject
  } = ctx.request.body
  controllerSubject.subjectUpdateById(id, subject)
  ctx.body = "test"
})

module.exports = router