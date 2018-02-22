# Jquery 部分问题

## JQuery选择器的效率问题

ID选择器效率最高，JQ选择器基于getElementById和getElementByTagName，所以使用ID选择器效率最高，直接调用getElementById获取dom而样式选择器通过getElementByTagName获取则需要筛选已获得的元素

为了尽量提高效率，使用尽可能详细的选择器,缩小筛选的范围

```js
// use
$('div.good')
// do not use
$('.good')
```

