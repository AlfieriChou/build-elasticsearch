const search = require('../common/query')

class SearchController {
  async index (ctx) {
    const params = ctx.query
    const result = await search(params)
    ctx.body = result
  }
}

module.exports = new SearchController()
