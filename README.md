# Sadope

Very easy to use NodeJS HTTP client.

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
  query = {},
  auth = '',
  headers = {}
}
const url = 'https://api.example.com'
const result = await request(url, options)
```

ISC Licensed. Enjoy!
