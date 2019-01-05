const http = require('http')
const fs = require('fs')
const qs = require('querystring')
const urlLib = require('url')

// 暂时模拟数据库存储数据
var users = {};

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

    // 区分访问接口、文件
    if (url == '/user') { // 接口
      switch (GET.act) {
        case 'register':
          //1. 检查用户名是否存在
          if (users[GET.user]) {
            res.write('{"ok": false, "msg": "此用户已存在"}')
          } else {
            // 用户名不存在，插入users
            users[GET.user] = GET.password
            res.write('{"ok": true, "msg": "恭喜您注册成功"}')
          }
          break
        case 'login':
          //1. 检查用户名是否存在
          if (users[GET.user] == null) {
            res.write('{"ok": false, "msg": "用户名不存在"}')
            //2. 检查密码是否正确
          } else if (users[GET.user] !== GET.password) {
            res.write('{"ok": false, "msg": "用户或密码输入错误"}')
          } else {
            res.write('{"ok": true, "msg": "恭喜您登录成功"}')
          }
          break
        default:
          res.write('{"ok": false, "msg": "未知的请求"}')
      }
      res.end()
    } else { // 文件

    }

    // 读取文件
    // var file_name = './www' + url
    // fs.readFile(file_name, (err, data) => {
    //   err ? res.write('404') : res.write(data)
    //   res.end()
    // })
  })

}).listen('1234')