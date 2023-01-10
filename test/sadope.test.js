const assert = require('assert')
const sadope = require('../index.js')

const PORT = 24839
const BASE = 'http://localhost:' + PORT

async function run() {
  console.log('Running tests...')

  // Test success
  let result = await sadope(BASE + '/success')
  console.log(result)

  assert.ok(result.code == 200)
  assert.ok(result.data.hello == 1)
  assert.ok(result.text == '{"hello":1}')
  assert.ok(result.length == 11)
  assert.ok(result.type == 'application/json')
  assert.ok(!!result.date)
  assert.ok(result.connection == 'close')
  assert.ok(result.ok === true)

  // Test error
  result = await sadope(BASE + '/error')
  console.log(result)

  assert.ok(result.code == 500)
  assert.ok(typeof result.data == 'object')
  assert.ok(Object.keys(result.data).length == 0)
  assert.ok(result.text == '')
  assert.ok(result.length == 0)
  assert.ok(result.type === '')
  assert.ok(!!result.date)
  assert.ok(result.connection == 'close')
  assert.ok(result.ok === false)

  console.log('Done.')

  // Test HTML response
  result = await sadope(BASE + '/html')
  console.log(result)

  assert.ok(result.code == 200)
  assert.ok(typeof result.data == 'object')
  assert.ok(Object.keys(result.data).length == 0)
  assert.ok(result.text == '<html></html>')
  assert.ok(result.length == 13)
  assert.ok(result.type === 'text/html')
  assert.ok(!!result.date)
  assert.ok(result.connection == 'close')
  assert.ok(result.ok === true)

  // Test auth
  result = await sadope(BASE + '/auth', { auth: 'hello' })
  console.log(result)

  assert.ok(result.code == 200)
  assert.ok(result.data.authorized === true)
  assert.ok(result.text == '{"authorized":true}')
  assert.ok(result.length == 19)
  assert.ok(result.type == 'application/json')
  assert.ok(!!result.date)
  assert.ok(result.connection == 'close')
  assert.ok(result.ok === true)
}

run()
