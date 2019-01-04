const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const urlLib = require('url')

var server = http.createServer((req, res) => {
  // GET
  var obj = urlLib.parse(req.url, true)
  const GET_DATA = obj.query
  var url = obj.pathname

  // POST
  var receivedStr = ''
  req.on('data', (data) => {
    receivedStr += data
  })
  req.on('end', () => {
    const POST_DATA = qs.parse(receivedStr)

    console.log(url, GET_DATA, POST_DATA);
    // get:/ { username: 'isaacgaohang', pword: 'dewjdewnd3278e93874' } {}
    // post:/ {} { username: 'isaacgaohang', pword: 'ndkjedk32y892dh2nd' }

    // 文件读写
    var file_name = './www' + url
    fs.readFile(file_name, (err, data) => {
      err ? res.write('404') : res.write(data)
      res.end()
    })
  })

})

server.listen('1234')