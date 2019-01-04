const fs = require('fs')

fs.readFile('./lorem.txt', (err, data) => {
	err ? console.log('connection fail') : console.log(data)
	// <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d 20 64 6f 6c 6f 72 20 73 69 74 20 61 6d 65 74 2c 20 63 6f 6e 73 65 63 74 65 74 75 72 20 61 64 69 70 69 73 69 63 69 6e ... >
})