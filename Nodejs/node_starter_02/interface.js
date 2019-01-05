const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const urlLib = require('url')

var server = http.createServer((req, res) => {
  // 数据解析
  var str = ''

  req.on('data', (data) => {
    str += data
  })

  req.on('end', () => {
    var obj = urlLib.parse(req.url, true)

    const url = obj.pathname
    const GET = obj.query
    const POST = qs.parse(str)
  })

  // 区分访问接口、文件
  if (url == '/user') { // 接口

  } else { // 文件

  }

  // 读取文件
  var file_name = './www' + url
  fs, readFile(file_name, (err, data) => {
    err ? res.write('404') : res.write(data)
    res.end()
  })
})