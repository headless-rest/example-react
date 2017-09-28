const axios = require('axios')
const fs = require('fs-extra')
const path = require('path')

const HEADLESS_TOKEN = '3eqUsAwZa59vNSHXhQBQ1lxWILXy9u7u'

axios.get(`https://content.headless.rest/api/v1/demo-website/content/blog`, {
  params: {
    token: HEADLESS_TOKEN
  }
}).then((res) => {
  fs.outputFileSync(path.join(__dirname, 'src', 'headless', 'content', 'blog.json'), JSON.stringify(res.data.items, null, '  '))
}).catch((err) => {
  console.error(err.message)
  process.exit(-1)
})
