const router = require('koa-router')()
const controllerSubject = require("../controller/subject")

router.post('/mobilex/subject/save', async (ctx) => {
  const {
    id,
    name,
    data
  } = ctx.request.body
  if (!id) {
    const result = controllerSubject.subjectAdd({
      name,
      data: data
    })
    ctx.body = result
  }
})
router.get('/mobilex/subject/all', async (ctx) => {
  ctx.body = await controllerSubject.subjectGetAll()
})
router.post('/mobilex/subject/delete', async (ctx) => {
  const {
    id
  } = ctx.request.body
  ctx.body = await controllerSubject.subjectRemoveById(id)
})
router.get('/mobilex/subject/get', async (ctx, next) => {
  const {
    id
  } = ctx.request.query
  ctx.body = await controllerSubject.subjectGetById(id)
})
router.post('/mobilex/subject/update', async (ctx, next) => {
  const {
    id,
    cover,
    subject
  } = ctx.request.body
  await controllerSubject.subjectUpdateById(id, cover, subject)
  ctx.body = "success"
})
router.get('/mobilex/test', async (ctx, next) => {
  ctx.body = [{
    text1: "1111111111",
    text2: "test1",
    image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541433560937&di=c0040b3a25788365a550b7be05cbd89a&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201605%2F04%2F20160504182904_VwJEa.jpeg"
  }, {
    text1: "2222222222",
    text2: "test2",
    image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541441573689&di=6ea4895a925bd642927f522e55b4bc54&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201206%2F29%2F20120629174939_HWHuc.thumb.700_0.jpeg"
  }]
})
module.exports = router