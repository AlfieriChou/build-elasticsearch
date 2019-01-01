const elasticsearch = require('elasticsearch')

const client = new elasticsearch.Client({
  host: 'localhost:9200'
  // log: 'trace',
})

const search = async (query) => {
  await client.ping({ requestTimeout: 30000 })

  const resp = await client.search({
    index: 'osm',
    type: 'place',
    body: {
      sort: [
        {
          place_rank_num: { order: 'desc' }
        },
        {
          importance_num: { order: 'desc' }
        }
      ],
      query: {
        bool: {
          should: [
            {
              match: {
                name: query
              }
            },
            {
              match: {
                alternative_names: query
              }
            }
          ]
        }
      }
    }
  })
  const { hits } = resp.hits
  return hits
}

module.exports = search
