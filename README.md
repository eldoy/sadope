# Sadope

NodeJS HTTP client based on [superagent.](https://github.com/visionmedia/superagent)

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
