const urlLib = require('url')

var obj = urlLib.parse('http://www.zhidaoshishenme.com/?username=isaacgao&passowrd=23y2783273&a=12&b=25', true)

console.log(obj)