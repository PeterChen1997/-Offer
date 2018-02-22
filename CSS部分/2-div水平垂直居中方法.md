# div水平垂直居中方法

## 绝对定位(margin:auto实现居中)

```css
div {
  width:100px;
  height: 100px;
  position: absolute;
  left:0;
  top: 0;
  bottom: 0;
  right: 0;
  /* margin设置为auto实现绝对定位元素的垂直居中 */
  margin: auto;
}
```

## 绝对定位(margin 负值实现居中)

```css
div {
  width:100px;
  height: 100px;
  position: absolute;
  left:50%;
  top: 50%;

  margin-left: -50px;
  margin-top: -50px;
}
```

## 绝对定位(transform变换)

```css
div {
  width:100px;
  height: 100px;
  position: absolute;
  left:50%;
  top: 50%;

  transform: translate(-50%, -50%);
}
```

## flex布局(不定宽高水平垂直居中)

```css
body {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
div {
  background-color: burlywood;
  height: 100px;
  width: 100px;
}
```

## Tabel布局

```css
div {
  width:100vw;
  height: 100vh;
  display: table-cell;
  vertical-align: middle;
  text-align: center;
}
```
## div 装成 table

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>JS Bin</title>
</head>
<body>
  <div class="table">
      <div class="td">
        <div class="child">
          一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文字一串文
        </div>
    </div>
  </div>
</body>
</html>
```

```css

·div.table{
  display: table;
  border: 1px solid red;
  height: 600px;
}
div.tr{
  display: table-row;
  border: 1px solid green;
}
div.td{
  display: table-cell;
  border: 1px solid blue;
  vertical-align: middle;
.child{
  border: 10px solid black;

```


## 100% 高度的 afrer before 加上 inline block

```css
.parent{
  border: 3px solid red;
  height: 600px;
  text-align: center;
}

.child{
  border: 3px solid black;
  display: inline-block;
  width: 300px;
  vertical-align: middle;
}

.parent .before{
  outline: 3px solid red;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
.parent .after{
  outline: 3px solid red;
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}


```
