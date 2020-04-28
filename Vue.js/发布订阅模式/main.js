function Vue(options) {
  this.$options = options
  let data = this._data = this.$options.data // 通过vue实例直接访问data

  // 代理this.$options.data 到 this 因为我们使用时都是this.a, this.b
  observe(data)
  for (let name in data) {
    if (data.hasOwnProperty(name)) {
      Object.defineProperty(this, name, {
        configurable: false,
        enumerable: true,
        get() {
          return this._data[name]
        },
        set(newVal) {
          this._data[name] = newVal
        }
      })
    }
  }

  // 编译模板 --- 实现DOM渲染
  new Compile(this.$options.el, this)

  function Compile(el, vm) {
    // 1. 找到vm挂载的范围
    vm.$el = document.querySelector(el)
    // 2. 创建有个空的文档片段
    var fragment = document.createDocumentFragment()
    var child
    while (child = vm.$el.firstChild) {
      fragment.appendChild(child)
    }
  }

  function replace(fragment) {
    Array.from(fragment.childNodes).forEach((node) => {
      let text = node.textContent
      let reg = /\{\{(.*)\}\}/ig
    })
  }
}