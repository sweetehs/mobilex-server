const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const subject = require('./routes/subject')
const upload = require('./routes/upload')

require("./mongodb/index")

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes: ['json', 'form', 'text']
}))
app.use(json())
app.use(logger())

app.use(require('koa-static')(__dirname + '/public'))
app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// // logger
app.use(async (ctx, next) => {
  try {
    await next()
    ctx.status = ctx.status ? ctx.status : 200
    ctx.body = {
      status: ctx.status === 200 ? 1 : 0,
      data: ctx.body
    }
  } catch (error) {
    if(error.status){
      ctx.status = error.status;
      ctx.body = error.message;
    }else{
      ctx.status = 200
      ctx.body = {
        status: 0,
        message: error.message
      }
    }
    ctx.app.emit('error', error, ctx);
  }
})

// routes
app.use(subject.routes(), subject.allowedMethods())
app.use(upload.routes(), upload.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app