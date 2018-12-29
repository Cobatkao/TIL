axios.interceptors.response.use(function(response) {
  let {
    config: {
      url,
      method,
      data
    }
  } = response
  data = JSON.parse(data || '{}')
  let row = {
    id: 1,
    name: 'JavaScript高级程序设计',
    number: 2
  }
  if (url === '/books/1' && method === 'get') {
    response.data = row
  } else if (url === '/books/1' && method === 'put') {
    response.data = Object.assign(row, data)
  }
  return response
})

/****************************************************/

function fetchDb() {
  return axios.get('/books/1')
}

function saveDb(newData) {
  return axios.put('/books/1', newData)
}


var template = `
<div>··
  书名：《__name__》，
  数量：<span id="number">__number__</span>
</div>
<div class="actions">
  <button id="plus">加1</button>
  <button id="minus">减1</button>
  <button id="square">平方</button>
  <button id="cube">立方</button>
  <button id="reset">归零</button>
</div>
`

fetchDb().then((response) => {
  let result = response.data
  $('#app').html(
    template.replace('__number__', result.number)
    .replace('__name__', result.name)
  )

  // 加法
  $('#plus').on('click', (e) => {
    let oldVal = parseInt($('#number').text(), 10)
    console.log("oldVal" + oldVal)
    let newVal = oldVal + 1
    console.log("newVal" + newVal)
    saveDb({
      number: newVal
    }).then(function(res) {
      console.log(res)
      $('#number').text(res.data.number)
    })
  })

  // 减法
  $('#minus').on('click', (e) => {
    let oldVal = parseInt($('#number').text(), 10)
    console.log("oldVal" + oldVal)
    let newVal = oldVal - 1
    console.log("newVal" + newVal)
    saveDb({
      number: newVal
    }).then(function(res) {
      console.log(res)
      $('#number').text(res.data.number)
    })
  })

  // 平方
  $('#square').on('click', (e) => {
    let oldVal = parseInt($('#number').text(), 10)
    console.log("oldVal" + oldVal)
    let newVal = Math.pow(oldVal, 2)
    console.log("newVal" + newVal)
    saveDb({
      number: newVal
    }).then(function(res) {
      console.log(res)
      $('#number').text(res.data.number)
    })
  })

  // 立方
  $('#cube').on('click', (e) => {
    let oldVal = parseInt($('#number').text(), 10)
    console.log("oldVal" + oldVal)
    let newVal = Math.pow(oldVal, 3)
    console.log("newVal" + newVal)
    saveDb({
      number: newVal
    }).then(function(res) {
      console.log(res)
      $('#number').text(res.data.number)
    })
  })

  // 重置
  $('#reset').on('click', (e) => {
    let newVal = 0
    console.log("newVal" + newVal)
    saveDb({
      number: newVal
    }).then(function(res) {
      console.log(res)
      $('#number').text(res.data.number)
    })
  })

})