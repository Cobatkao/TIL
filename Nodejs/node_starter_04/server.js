const express = require('express')

var server = express()

// 当用户请求根目录时，执行函数
server.use('/', function(req, res) {

})

server.listen('1234')