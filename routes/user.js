const router = require('koa-router')()
const controllerUser = require("../controller/user")
const configjwt = require("../config").jwt
const jwt = require('jsonwebtoken')
const util = require("../util/util")
router.post('/mobilex/user/register', async (ctx) => {
  const {
    username,
    password
  } = ctx.request.body
  let error = ""
  if (!username) {
    error = "请输入用户名"
  } else if (!password) {
    error = "请输入密码"
  }
  if (error) {
    throw new Error(error)
  }
  const user = await controllerUser.userGetById(username)
  if (user && user.username) {
    throw new Error("用户名存在，请重新输入")
  } else {
    ctx.body = controllerUser.userAdd({
      username,
      password
    })
  }
})
router.post("/mobilex/user/login", async (ctx) => {
  const {
    username,
    password
  } = ctx.request.body
  const user = await controllerUser.userGetById(username) || {}
  if (password === user.password) {
    const token = jwt.sign({
      username: user.username,
      userid: user._id
    }, configjwt, {
      expiresIn: '4h'
    })
    ctx.body = {
      token: token
    }
  } else {
    throw new Error("登录失败")
  }
})
router.get("/mobilex/user/userinfo", async (ctx) => {
  const user = util.getUser(ctx) || {}
  ctx.body = {
    username: user.username
  }
})
module.exports = router