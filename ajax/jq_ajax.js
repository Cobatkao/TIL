/**
 * 原生JS封装Jquery ajax方法
 */
window.$ = window.jQuery;

window.jQuery.ajax = function ({
  url = '',
  method = 'GET',
  body = '',
  headers = {}
} = {}) {
  // 返回Promise
  return new Promsie(function (resolve, reject) {
    // 发送ajax异步请求
    let request = new XMLHttpRequest()
    request.open(method, url)
    for (let key in headers) {
      let value = headers[key]
      request.setRequestHeader(key, value)
    }
    request.onreadystatechange = function () {
      if (request.readyState === 4) {
        if (request.status >= 200 && request.status <= 300 || request.status === 304) {
          //  successFn.call(undefined, request.responseText)
          resolve(request.responseText)
        } else if (request.status >= 400) {
          // 失败回调
          reject(request)
        }
      }
    }
    request.send(body || null)
  })
}

// 调用ajax
myButton.addEventListener('click', function () {
  window.jQuery.ajax({
    url: '/isaac',
    method: 'GET',
    headers: {
      'Content-Type': 'xxx-form-urlencoded',
      'isaac': 25
    }
  }).then((text) => {
    console.log(text)
  }, (request) => {
    console.log(request)
  })
})