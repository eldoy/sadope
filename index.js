const superagent = require('superagent')

module.exports = function request(url, options = {}) {
  const {
    method = 'get',
    params = '',
    query,
    auth,
    headers
  } = options

  return new Promise(function(resolve, reject) {
    let req = superagent[method](url).send(params)
    if (query) {
      req = req.query(query)
    }
    if (auth) {
      req = req.set('Authorization', auth)
    }
    if (headers) {
      for (const field in headers) {
        req = req.set(field, headers[field])
      }
    }
    req.end(function(err, res) {
      if (err || !res.ok) {
        console.log(err)
        reject(err)
      } else {
        resolve(res.body)
      }
    })
  })
}
