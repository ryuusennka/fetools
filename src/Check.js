/*
 * @Author: ryuusennka
 * @Date: 2020-04-25 03:46:39
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-12-11 22:55:09
 * @FilePath: /sennka-tools/src/Check.js
 */

/**
 * ES6 中可以为函数的参数设置默认值，有了这个，我们可以实现一个验证方法参数不能为空的巧妙技巧。
 * use it:
 * const print = (num = isRequired()) => {
 *   console.log(`printing ${num}`)
 * }
 */

export const isRequired = () => {
  throw new Error('param is required.');
};
