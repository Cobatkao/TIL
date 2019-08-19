const jwt = require('jsonwebtoken')
const { User } = require('./models')
const SECRET = 'wjdbu3y92d97qd'

const auth = async (req, res, next) => {
  const raw = String(req.headers.authorization)
    .split(' ')
    .pop()
  //7.解密流程
  const { id } = jwt.verify(raw, SECRET)
  req.user = await User.findById(id)
  next()
}

module.exports = {
  auth
}