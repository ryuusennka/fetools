/*
 * @Author        : ryuusennka
 * @Date          : 2020-04-30 13:17:02
 * @LastEditors   : ryuusennka
 * @LastEditTime  : 2021-10-12 01:40:46
 * @FilePath      : /sennka-tools/src/Object.js
 * @Description   :
 */

/**
 * 检查对象是否包含某个属性
 * @param {Object} targetObject 对象
 * @param {String} propKey property name
 * @returns {Boolean}
 */
export const objHasProp = (targetObject, propKey) =>
  Reflect.has(targetObject, propKey);
// const objHasProp = (targetObject, propKey) =>
//   Object.keys(targetObject).includes(propKey);
