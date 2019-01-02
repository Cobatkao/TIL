const http = require('http');

var server = http.createServer(function(req, res) {
	console.log('有人来敲门了~')

	switch(req.url) {
		case '/1.html':
			res.write('1.html >>> server connection ok')
			break
		case '/2.html':
			res.write('2.html >>> server connection ok')
			break
		case '/3.html':
			res.write('3.html >>> server connection ok')
			break
	}

	res.end()
});

server.listen(8080);