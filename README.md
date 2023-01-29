# Sadope

Very easy to use NodeJS HTTP client.

Predictable API. Does not throw error on non-200 response.

### Install

```
npm i sadope
```

### Usage

```js
const request = require('sadope')

// Default options
const options = {
  method = 'get',
  params = '',
  query = '',
  fields = {},
  use = [],
  auth = '',
  headers = {},
  type = '',
  accept = ''
}
const url = 'https://api.example.com'
const response = await request(url, options)
{
  code: 200,
  data: {},
  text: '<html></html>',
  length: 13,
  type: 'text/html',
  date: 2022-12-23T13:25:10.000Z,
  connection: 'close',
  ok: true
}
```

On error the response includes an `error` object like this:
```js
{
  code: 0,
  data: {},
  text: '',
  length: 0,
  type: '',
  date: 2023-01-29T15:09:30.000Z,
  connection: '',
  headers: {},
  ok: false,
  error: {
    errno: -61,
    code: 'ECONNREFUSED',
    syscall: 'connect',
    address: '127.0.0.1',
    port: 54364,
    message: 'connect ECONNREFUSED 127.0.0.1:54364'
  }
}
```

ISC Licensed. Enjoy!
