// 配合form.html

const http = require('http')
const qs = require('querystring')
const urlLib = require('url')

http.createServer((req, res) => {
  // var BOX = {}
  //
  // if (req.url.indexOf('?') != -1) {
  //
  //   var arr = req.url.split('?')
  //   var url = arr[0]
  //   var serach_string = arr[1]
  //   BOX = qs.parse(serach_string)

  // 自己拆分查询字符串
  // var arr2 = serach_string.split('&')
  // // ['user=isaac', 'password=xxxxx']
  //
  // for (let item of arr2) {
  //   var arr3 = item.split('=')
  //   BOX[arr3[0]] = arr3[1]
  //   // arr3[0] user
  //   // arr3[1] isaac
  // }

  // } else {
  //   var url = req.url
  // }

  var json = urlLib.parse(req.url, true)
  var url = json.pathname
  var BOX = json.query

  console.log('finally', url, BOX)

  // res写入响应内容
  res.write('connection success!')
  res.end()
}).listen(8012)