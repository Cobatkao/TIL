const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/express-auth', {
  useCreateIndex: true, // 6.解决数据库记录重复问题
  useNewUrlParser: true
})

// 1.定义用户模型，方便扩展
const userscheme = new mongoose.Schema({
  username: { type: String, unique: true },
  password: { type: String, set(val) {
    return require('bcrypt').hashSync(val, 10)
  } }
})

const User = mongoose.model('User', userscheme)

// 5.删除集合中的user数据库
// User.db.dropCollection('users')

// 2.输出对象形式，方便扩展，同时require时用解构的形式
module.exports = {
  User
}