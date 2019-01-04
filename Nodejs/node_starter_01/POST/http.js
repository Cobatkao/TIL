const http = require('http')
const qs = require('querystring')

http.createServer((req, res) => {
  var str = ''

  var i = 0
  req.on('data', (data) => {
    console.log(`这是第${i++}次接收到数据！`);
    str += data
  })
  req.on('end', () => {
    var POST = qs.parse(str)
    console.log(POST);
    // { username: 'isaacgaohang',pword: 'huanghuang520',content: 'hahaha' }
  })

}).listen('1234')