<!--
 * @Author        : ryuusennka
 * @Date          : 2021-10-12 02:27:59
 * @LastEditors   : ryuusennka
 * @LastEditTime  : 2021-10-12 03:56:45
 * @FilePath      : /fetools/readme.md
 * @Description   :
-->

# 前端工具库

收集了常用工具函数

## 使用方法

比如要使用“检查对象是否包含某个属性(objHasProp)”这个方法，源码在 src/Object.js 下，
而编译出来的文件在 dist 目录，所以使用的时候就是

```js
const { objHasProp } = require('@sennka/fetools/dist/Object'); // 从 dist 下引入
const obj = { foo: 'bar' };
console.log(objHasProp(obj, 'foo'));
```
