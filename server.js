const http = require('http')

const server = http.createServer(async function (req, res) {
  console.log(req.url)
  if (req.url == '/success') {
    res.setHeader('content-type', 'application/json')
    res.statusCode = 200
    res.end(JSON.stringify({ hello: 1 }))
  } else if (req.url == '/error') {
    res.statusCode = 500
    res.end('')
  } else if (req.url == '/html') {
    res.setHeader('content-type', 'text/html')
    res.statusCode = 200
    res.end('<html></html>')
  } else if (req.url == '/auth') {
    res.setHeader('content-type', 'application/json')
    res.statusCode = 200
    console.log(req.headers)
    const authorized = !!req.headers.auth
    res.end(JSON.stringify({ authorized }))
  } else {
    res.statusCode = 404
    res.end('')
  }
})

server.listen(24839)
