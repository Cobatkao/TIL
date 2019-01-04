const http = require('http');
const fs = require('fs')

var server = http.createServer(function(req, res) {
	console.log('有人来敲门了~')

	// switch(req.url) {
	// 	case '/1.html':
	// 		res.write('1.html >>> server connection ok')
	// 		break
	// 	case '/2.html':
	// 		res.write('2.html >>> server connection ok')
	// 		break
	// 	case '/3.html':
	// 		res.write('3.html >>> server connection ok')
	// 		break
	// }

	// res.end()

	// fs模块
	var file_name = './temp' + req.url

	fs.readFile(file_name, (err, data) => {
		err ? res.write('404') : res.write(data)
		res.end()
	})

});

server.listen(8080);