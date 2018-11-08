const Koa = require('koa')
const app = new Koa()
require("./mongodb/index")
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const subject = require('./routes/subject')

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

// logger
app.use(async (ctx, next) => {
  try {
    await next()
    ctx.body = {
      status: 1,
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

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app