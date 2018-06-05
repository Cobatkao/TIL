// JSONP方法解决跨域限制

function handleData(data) { // 指定回调函数
    console.log(data)
}

function addScriptTag(src) {  // 动态创建script标签的函数
    var script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.src = src
    document.body.appendChild(script)
    // document.body.insertBefore(script, document.body.firstChild);
}

window.onload = function() {
    var oBtn = document.getElementById('btn')
    oBtn.onclick = function() {
        addScriptTag('https://api.douban.com/v2/book/search?q=javascript&count=1&callback=handleData') // 回调函数是关键！
    }
}

/* 正常的ajax请求会受到跨域限制！

window.onload = function() {
    var oBtn = document.getElementById('btn')
    oBtn.onclick = function() {
        var xhr = new XMLHttpRequest()
        xhr.open('get', 'https://api.douban.com/v2/book/search?q=javascript&count=1', true)
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    console.log(xhr.responseText + '恭喜您请求发送成功！')
                }
                else {
                    console.log(xhr.statusText)
                }
            }
        }
        xhr.onerror = function() {
            console.log('响应出现问题，请排查问题！')
        }
        xhr.send()
    }
}
*/