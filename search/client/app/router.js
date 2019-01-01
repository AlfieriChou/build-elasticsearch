const Router = require('koa-router')
const router = new Router()
const search = require('./controller/search')

router.get('/search', search.index)

module.exports = router
