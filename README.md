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

ISC Licensed. Enjoy!
