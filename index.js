const superagent = require('superagent')

module.exports = function request(url, options = {}) {
  const {
    method = 'get',
    params = '',
    query = '',
    use = [],
    auth = '',
    headers = {},
    type = ''
  } = options

  return new Promise(function (resolve) {
    const req = superagent[method](url).send(params)
    if (query) {
      req.query(query)
    }
    for (const fn of use) {
      if (typeof fn == 'function') {
        req.use(fn)
      }
    }
    if (auth) {
      req.set('Authorization', auth)
    }
    for (const field in headers) {
      req.set(field, headers[field])
    }
    if (type) {
      req.type(type)
    }
    req.end(function (err, res) {
      console.log(res)
      const response = {
        code: res.statusCode,
        data: res.body || {},
        text: res.text || '',
        length: parseInt(res.headers['content-length']),
        type: (res.headers['content-type'] || '').toLowerCase(),
        date: new Date(Date.parse(res.headers.date)),
        connection: res.headers.connection,
        ok: res.ok
      }
      resolve(response)
    })
  })
}
