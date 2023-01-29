const superagent = require('superagent')

module.exports = function request(url, options = {}) {
  const {
    method = 'get',
    params = '',
    query = '',
    fields = {},
    use = [],
    auth = '',
    headers = {},
    type = '',
    accept = ''
  } = options

  return new Promise(function (resolve) {
    const req = superagent[method](url)
    if (params) {
      req.send(params)
    }
    if (query) {
      req.query(query)
    }
    if (accept) {
      req.accept(accept)
    }
    for (const field in fields) {
      req.field(field, fields[field])
    }
    for (const fn of use) {
      if (typeof fn == 'function') {
        req.use(fn)
      }
    }
    if (auth) {
      req.set('authorization', auth)
    }
    for (const field in headers) {
      req.set(field, headers[field])
    }
    if (type) {
      req.type(type)
    }
    req.end(function (err, response) {
      const res = response || err?.response || {}
      res.headers = res.headers || {}
      const text = res.text || ''
      const result = {
        code: res.statusCode || 0,
        data: res.body || {},
        text,
        length: parseInt(res.headers['content-length']) || text.length,
        type: (res.headers['content-type'] || '').toLowerCase(),
        date: new Date(Date.parse(res.headers.date || new Date())),
        connection: res.headers.connection || '',
        headers: res.headers || {},
        ok: res.ok || false
      }
      if (err) {
        result.error = JSON.parse(JSON.stringify(err))
        result.error.message = err.message
      }
      resolve(result)
    })
  })
}
