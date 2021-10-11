/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 11:12:40
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-04-16 01:22:08
 * @FilePath: /sennka-tools/src/Array.js
 * @Description:
 */
/**
 * 生成连续的自然数数组
 * @param {number} min
 * @param {number} max
 */
export const generateContinuousNumber = (min, max) => {
  const arr = [];
  for (let i = min; i <= max; i++) {
    arr.push(i);
  }
  return arr;
};

/**
 * 生成连续的自然数数组
 * @param {number} count 生成几个
 * @param {number} start 从几开始
 * @returns {array} 连续的数组
 * @example generateContinuousNaturalNumberArrays(5,1)
 * // returns [1,2,3,4,5]
 * @example generateContinuousNaturalNumberArrays(5,0)
 * // returns [0,1,2,3,4]
 */
export const generateContinuousNaturalNumberArrays = (count, start) => {
  return Array.from({ length: count }, (value, index) => index + start);
};

/**
 * 把一个数组按几个分成一组,[1,2,3,4] separateArr(arr, 3) [[1,2,3], [4]]
 * @param {array} arr 数组
 * @param {number} n 分为几组
 */
export const separateArr = (arr, n) => {
  const N = Math.ceil(arr.length / n);
  const newArr = new Array(N); // 空填充->空数组
  for (let i = 0; i < N; i++) {
    newArr[i] = arr.slice(i * n, n * (i + 1));
  }
  return newArr;
};

/**
 * 从数组中获取随机元素
 * @param {array} arr
 */
export const getRandomItem = arr => arr[Math.floor(Math.random() * arr.length)];

/**
 * 从数组中删除指定的元素
 * @param {array} oldArr 原来的数组
 * @param {Any} specifiedElement 原来数组中的元素
 * @returns {Array} 返回一个新的数组
 * @example
 * var arr = [{a:1},{a:2},{a:3}];
 * var s = arr[1];
 * var newArr = deleteSpecifiedElement(arr,s); // [{a:1},{a:3}]
 */

export const deleteSpecifiedElement = (oldArr, specifiedElement) =>
  oldArr.filter(item => item !== specifiedElement);

// 合并数组
// export const mergeArray = (arr1, arr2) => arr1.concat(arr2);
/**
 *
 * @name 向数组前面添加新元素,返回一个新数组
 * @param {Any} item - 要添加的元素
 * @param {array} arr - 数组
 * @returns {array} 新数组
 */
export const mergeArray = (item, arr) => [item, ...arr];

/**
 * 比较两个数组是否含有相同元素，并返回公共元素，否则返回空数组
 * @param {array} arr1 - 数组
 * @param {array} arr2 - 数组
 * @returns {array} - 交集
 */
export const getSameElement = (arr1 = [], arr2 = []) => {
  let big, small;
  if (arr1.length >= arr2.length) {
    big = arr1;
    small = arr2;
  } else {
    big = arr2;
    small = arr1;
  }
  return arr1.filter(item => {
    return arr2.includes(item);
  });
};
