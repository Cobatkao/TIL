const express =  require('express')
const app = express()

const { User } = require('./models')
const { auth } = require('./middleware')

const jwt = require('jsonwebtoken')
const SECRET = 'wjdbu3y92d97qd'

// 3.允许接收客户端的json数据
app.use(express.json())

app.get('/api/v1', async (req, res) => {
  const users = await User.find()
  res.send(users)
})

app.post('/api/v1/register', async (req, res) => {
  //4.保存数据进数据库
  const user = await User.create({
    username: req.body.username,
    password: req.body.password
  })
  res.send(user)
})

app.post('/api/v1/login', async (req, res) => {
  const user = await User.findOne({
    username: req.body.username
  })
  
  if (!user) {
    return res.status(422).send({
      message: '用户名不存在'
    })
  }

  const isPadValid = require('bcrypt').compareSync(
    req.body.password,
    user.password
  )

  if (!isPadValid) {
    return res.status(422).send({
      message: '密码无效'
    })
  }

  const token = jwt.sign(
    {
      id: String(user._id)
    },
    SECRET
  )
  res.send({
    user,
    token
  })
})

app.get('/api/v1/userinfo', auth, async (req, res) => {
  res.send(req.user)
})

// 根据id返回订单的接口
// app.get('/api/v1/orders', auth, async (req, res) => {
//   const orders = await orders.find().where({
//     user: req.user._id
//   })
//   res.send(orders)
// })

app.listen('3001', () => {
  console.log('Server is running on 3001')
})