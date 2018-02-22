# 跨域总结

## 什么是跨域

这就不得不提到，浏览器的 **同源策略** ：

- 是一个由Netscape实现的安全策略，所有使用JS的浏览器都会使用这个策略
- 所谓同源指的是： 域名，协议，端口相同
- 当网页请求脚本时，会执行脚本地址检查，如果不是同源的，则会拒绝执行

## 为什么要跨域

跨域是为了越过同源策略的限制，其实也就是回答为什么要启用同源协议，答案就是为了 **安全**

为了防止 CSRF(Cross-site request forgery), 中文名为跨站请求伪造，简单来说就是身份盗用

1. 用户登录了自己的银行页面 http://mybank.com， http://mybank.com 向用户的cookie中添加用户标识。
1. 用户浏览了恶意页面 http://evil.com 执行了页面中的恶意AJAX请求代码。
1. http://evil.com 向 http://mybank.com 发起AJAX HTTP请求，请求会默认把http://mybank.com 对应cookie也同时发送过去。
1. 银行页面从发送的cookie中提取用户标识，验证用户无误，response中返回请求数据。此时数据就泄露了。
1. 而且由于Ajax在后台执行，用户无法感知这一过程。

例子来源：知乎（黄家兴）

## 如何实现跨域

### 服务器端CORS(Cross-origin resource sharing)

跨域资源共享，详细可以看阮一峰老师的博客http://www.ruanyifeng.com/blog/2016/04/cors.html

### 1.JSONP(JSON with Padding)

缺点：

1. 只支持GET请求
1. 不能注册success，error事件监听函数，无法判断请求结果
1. JSONP是从其他域加载代码执行，容易受到CSRF攻击，安全性无法保障

是通过动态创建script标签，利用src进行跨域请求，虽然请求脚本会受同源策略的限制，但是调用时则不受限制，如\<script>\<img>\<iframe>这些含有src属性的标签

```js
// 下面是一段使用彩云天气请求天气预报的例子
const script = document.createElement('script')

// wuxi
script.src = 'https://api.caiyunapp.com/v2/RiA7WLZYAoqRWsdW/120.299,31.568/realtime.jsonp?callback=handleRes'

document.body.appendChild(script)

function handleRes(data) {
    document.body.removeChild(script)
    let degree = data.result.temperature
    let skycon = data.result.skycon
    document.querySelector('#degree').textContent = degree
    document.querySelector('.top-weather img').src = `./imgs/weather/${skycon}.png`
}
```

### 2.通过修改document.domain进行跨域

限制：

除了基础域名，协议和端口要一致

解决对于主域名相同，子域名不同情况下的跨域请求问题，即https://a.peterchen.club 访问 https://b.peterchen.club的内容

```js
// 通过设置两个页面的document.domain,之后通过parent或者window['iframeName']等方式拿到iframe的window对象了
document.domain = 'peterchen.club'
```

```html
<!-- https://a.peterchen.club/index.html -->
<body>
  <iframe src="https://bpeterchen.club" onload="iframeLoaded()">
  <script>
    console.log(document.querySelector('iframe').contentWindow)
  </script>
</body>
```

### 3.使用window.name进行跨域

受到同源限制，只能请求同一域名

优势：window.name能保存2M的数据，请求端口可以不同，window.name在文档刷新后任然存在

```js
// 主页面 http://localhost:80
const iframe = document.createElement('iframe')
iframe.style.display = 'none'
// 防止无限刷新
let state = 0

iframe.onload = () => {
  if(state === 1) {
    console.log(JSON.parse(iframe.contentWindow.name));
    // 清除创建的iframe
    iframe.contentWindow.document.write('');
    iframe.contentWindow.close();
    document.body.removeChild(iframe);
  } else if(state === 0) {
    state = 1;
    // 加载完成，指向当前域，防止错误，不能只设置域名，设置空页即可
    iframe.contentWindow.location = 'http://localhost:80/blank.html';
  }
}
iframe.contentWindow.location = 'http://localhost:81/index.html'
document.appendChild(iframe)
```

```js
// 请求页面 http://localhost:81
window.name = 'hello world'
```

### 4.location.hash跨域

iframe子页具有修改父页hash值的能力，可以通过这来进行数据传递，而且父页数据不会刷新

但是传递的数据有限

```js
// a页，同window.name,当state === 1时
const data = window.location.hash
```

```js
// b页
parent.location.hash = 'hello world'
```

### 5.window.postMessage跨域

HTML5新特性，可以用来向所有的window对象发送消息

### 6.websocket

### 7.代理

跳过浏览器的同源策略限制，通过服务器进行数据请求即可