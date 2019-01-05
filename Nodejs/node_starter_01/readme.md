# 模块

## fs

1. readFile(filename, callback(error, data))：接收要读的文件名，和异步操作的回调函数，文件操作理应是异步的！
    1. 读取txt文本，打印出data时发现是<Buffer 4c 6f 72 65 6d 20 69...>，二进制的文本表示。此时只要`data.toString()`即可打印出。
2. writeFile(filename, inputdata, callback(err))

### 如何接受前台数据请求

对前台来说，一般有三种发送数据的方式

- form
- jsonp
- ajax

对后台来说并不care发送数据的方式，都是走HTTP协议，后台收到HTTP请求，只要数据过来了就可以。

请求方式

- get：url明文传输
    - 比如百度搜索框输入关键字就会出现在url的查询字符串中，淘宝的搜索就不是哦url明文
- post：通过请求体传输

## GET数据解析

### 1. 自己切数据

```javascript
// 配合form.html

const http = require('http')

http.createServer((req, res) => {
  var BOX = {}

  if (req.url.indexOf('?') != -1) {

    var arr = req.url.split('?')
    var url = arr[0]
    var serach_string = arr[1]

  自己拆分查询字符串
    var arr2 = serach_string.split('&')
    // ['user=isaac', 'password=xxxxx']

    for (let item of arr2) {
      var arr3 = item.split('=')
      BOX[arr3[0]] = arr3[1]
      // arr3[0] user
      // arr3[1] isaac
    }

  } else {
    var url = req.url
  }

  console.log('finally', url, BOX)

  // res写入响应内容
  res.write('connection success!')
  res.end()
}).listen(8012)
```

### 2. Query String

> username=isaacgao&passowrd=23y2783273

上面这段就是查询字符串。node的Query String模块专门帮我们解析它。

- querystring.parse(str, sep, eq, options)
    - 该方法会把一个 URL 查询字符串 str 解析成一个json键值对的集合。

```javascript
const qs = require('querystring')

var json = qs.parse('username=isaacgao&passowrd=23y2783273')
console.log(json)
// { username: 'isaacgao', passowrd: '23y2783273' }
```

弊端：只能解析数据部分，一般post提交的数据用querystring来解析，因为post的数据是ky对。

### 3. url

专门用来解析url地址。

- urlLib.parse(str, true)
    - 第二个**参数为true**，会把query部分解析为json；
    - 主要是用两个数据，pathname，query，即地址和数据

```
const urlLib = require('url')

var obj = urlLib.parse('http://www.zhidaoshishenme.com/?username=isaacgao&passowrd=23y2783273&a=12&b=25')

console.log(obj)
```

返回一个解析好的对象，如下

```
Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.zhidaoshishenme.com',
  port: null,
  hostname: 'www.zhidaoshishenme.com',
  hash: null,
  search: '?username=isaacgao&passowrd=23y2783273&a=12&b=25',
  query: { username: 'isaacgao', passowrd: '23y2783273', a: '12', b: '25' },
  pathname: '/',
  path: '/?username=isaacgao&passowrd=23y2783273&a=12&b=25',
  href: 'http://www.zhidaoshishenme.com/?username=isaacgao&passowrd=23y2783273&a=12&b=25' }
[Finished in 0.77s]
```

一般get提交的数据用url模块来解析，因为get的数据包含了地址，查询字符串等等。

## POST数据解析

对于post方式来说，req的内容就是post的数据。

- req.on('data', callback(data) {})
    - 每一段数据达到，就触发data事件，次数不定
    - 数据接收到还要重新组装起来
- req.on('end', callback() {})
    - end事件触发时，代表数据全部达到了

post数据**分段发送**，这个计算机网络的知识有关，所以接受的时候就必须分段接受。

```javascript
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
```
