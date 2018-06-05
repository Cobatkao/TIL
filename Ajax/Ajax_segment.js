/*
 -----------------------------
 GET方法的ajax
 -----------------------------
 */

//step1. 实例化一个xhr对象
var xhr = new XMLHttpRequest()
//step2. 设置请求参数
xhr.open('GET', 'http://api.demo.com.cn', true)
//step3. 监听请求的状态变化
xhr.onreadystatechange = function() {
    // 通信成功后，状态值为4
    if (xhr.readyState == 4) {
        // 判断服务器状态
        if ((xhr.status >= 200) && (xhr.status < 300) || (xhr.status == 304)) {
            console.log(xhr.responseText)
        }
        else {
            console.error(xhr.statusText)
        }
    }
}
// 发生错误时触发error事件
xhr.onerror = function() {
    console.log(服务器出现异常！)
}
//step4. 发送请求，请求被分派到服务器
xhr.send()



/*
 -----------------------------
 兼容IE5\IE6的ajax xhr对象实例化
 -----------------------------
 */
var request
if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest() // IE7/FF/Chrome/Opera/Safari Supported
} else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP") // IE5/IE6 supported
}



/*
 -----------------------------
 POST方法的AJAX
 -----------------------------
 */
var xhr = new XMLHttpRequest()
var url = 'http://api.demo.com.cn'
xhr.open('POST', 'http://api.demo.com.cn', true)
xhr.timeout = 5000 // 超时时间
// onload事件代表请求已经完成
xhr.onload = function() {
    if ((xhr.status >= 200) && (xhr.status < 300) || (xhr.status == 304)) {
        console.log(this.responseText)
    }
    else {
        console.log(xhr.statusText)
    }
}
// 若请求超时，在此触发事件
xhr.ontimeout = function(url) {
    console.log(`This request for ${url} time out`)
}

xhr.onerror = function() {
    console.log('连接失败')
}

xhr.upload.onprogress = function() {

}

xhr.send('username=jirengu&password=123456')
