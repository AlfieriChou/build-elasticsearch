const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const logger = require('koa-logger')
const router = require('./app/router')

const app = new Koa()
app.use(bodyParser())
app.use(logger())
app.use(router.routes()).use(router.allowedMethods())

const port = 3000
const host = 'localhost'

app.listen(port, host, () =>
  console.log(`🚀 Server ready at http://127.0.0.1:3000`)
)
