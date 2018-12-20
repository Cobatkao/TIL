const express = require('express')
const app = express()

// 4.1
const mongoose = require('mongoose')
// 4.2
mongoose.connect('mongodb://localhost:28017/express-demo', { useNewUrlParser: true })

// 4.3 模型名称，表结构
const Product = mongoose.model('Product', new mongoose.Schema({
	// 定义属性字段
	title: String,
}))

// 4.4 插入数据，插入只要执行一遍
Product.insertMany([
		{
			title: '产品1',
			title: '产品2',
			title: '产品3',
			title: '产品4',
			title: '产品5',
			title: '产品6',
		}
	])


// 3. 解决跨域：引入cors包并执行它，返回一个中间件
app.use(require('cors')())

// 1. 定义路由
// app.get('/', function (req, res) {
// 	// 返回响应
// 	res.send({page: 'home'})
// })

// 2. 访问静态文件，访问路径必须有/static
app.use('/', express.static('public'))

app.get('/about', function (req, res) {
	res.send({page: 'About Us'})
})

app.get('/product', async function (req, res) {
	// 响应数据，先把数据写死，第4步引入数据库知识
	// res.send([
	// 		{id: 1, title: 'Product A'},
	// 		{id: 2, title: 'Product B'},
	// 		{id: 3, title: 'Product C'},
	// 	])
	// 4.5 async/await异步查询数据
	res.send(await Product.find())
})

// 监听，启动服务器
app.listen(4000, () => {
	console.log('app listening on port 3000!')
})