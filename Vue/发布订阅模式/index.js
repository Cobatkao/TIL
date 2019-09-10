/**
 * 实现两个方法
 * listen 订阅 即你在老板那里留下信息 接收两个参数：联系方式和订阅内容
 * publish 发布 即老板通知你 接收一个参数：联系方式
 */

class Boss {
  constructor() {
    this.list = [] // 收集订阅信息
  }

  subscribe(id, callback) {
    if (!this.list[id]) {
      this.list[id] = [] // 订阅信息未订阅，置空为数组
    }
    this.list[id].push(callback) // 收集过程，添加进id对应的数组中
    console.log('【订阅流程】', id, '预定成功')
  }

  publish(id) {
    var infos = this.list[id] // 订阅的所有内容
    if (infos.length !== 0) {
      infos.forEach(item => {
        console.log('【发布流程】尊敬的用户，您好！')
        item()
        console.log('【发布流程】已经到了！')
      });
    }
  }
}

const boss = new Boss()

boss.subscribe('13063080002', () => {
  return '我要XBOX'
})

boss.publish('13063080002')