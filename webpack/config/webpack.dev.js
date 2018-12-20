const path = require('path')
module.exports = {
  mode: 'development',
  // 配置<入口文件>
  entry: {
    // main的名字可随意
    main: '.src/main.js'
  },
  // 配置<出口文件>
  output: {
    // 打包路径
    path: path.resolve(__dirname,'dist'),
    filename: 'main.js'
  },
  // 模块：解读CSS，图片和转换，压缩
  module: {},
  // 插件，用于生产模板和各项功能
  plugins: [],
  // 配置webpack开发服务的各项功能
  devServer: {}
}