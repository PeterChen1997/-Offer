# CSS 中 position详解

## 取值与描述

| 值 | 描述 |
| -- | -- |
| inherit | 继承父属性的position值 |
| static | 默认值。元素出现在正常的流中，忽略top, left, bottom, right 和 z-index声明 |
| fixed | 生成绝对定位的元素，相对于window进行定位，left等声明有效 |
| absolute | 生成绝对定位的元素，相对于不是static的第一个父元素进行定位，如relative，left等声明有效 |
| relative | 生成相对定位的元素，相对于其正常位置进行定位，left等声明有效，对table系列元素无效 |