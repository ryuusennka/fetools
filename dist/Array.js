"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.separateArr = exports.mergeArray = exports.getSameElement = exports.getRandomItem = exports.generateContinuousNumber = exports.generateContinuousNaturalNumberArrays = exports.deleteSpecifiedElement = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 11:12:40
 * @LastEditors   : ryuusennka
 * @LastEditTime  : 2021-10-12 05:17:50
 * @FilePath      : /fetools/src/Array.js
 * @Description:
 */

/**
 * 生成连续的自然数数组
 * @param {number} min
 * @param {number} max
 */
var generateContinuousNumber = function generateContinuousNumber(min, max) {
  var arr = [];

  for (var i = min; i <= max; i++) {
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


exports.generateContinuousNumber = generateContinuousNumber;

var generateContinuousNaturalNumberArrays = function generateContinuousNaturalNumberArrays(count, start) {
  return Array.from({
    length: count
  }, function (value, index) {
    return index + start;
  });
};
/**
 * 把一个数组按几个分成一组,[1,2,3,4] separateArr(arr, 3) [[1,2,3], [4]]
 * @param {array} arr 数组
 * @param {number} n 分为几组
 */


exports.generateContinuousNaturalNumberArrays = generateContinuousNaturalNumberArrays;

var separateArr = function separateArr(arr, n) {
  var N = Math.ceil(arr.length / n);
  var newArr = new Array(N); // 空填充->空数组

  for (var i = 0; i < N; i++) {
    newArr[i] = arr.slice(i * n, n * (i + 1));
  }

  return newArr;
};
/**
 * 从数组中获取随机元素
 * @param {array} arr
 */


exports.separateArr = separateArr;

var getRandomItem = function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};
/**
 * 把数组排序打乱，注意：不能用于需要严格的打乱的情况
 * @param {Array} arr 想要打乱的数组
 */


exports.getRandomItem = getRandomItem;

var shuffleArr = function shuffleArr(arr) {
  arr.sort(function () {
    return 0.5 - Math.random();
  });
};
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


var deleteSpecifiedElement = function deleteSpecifiedElement(oldArr, specifiedElement) {
  return oldArr.filter(function (item) {
    return item !== specifiedElement;
  });
}; // 合并数组
// export const mergeArray = (arr1, arr2) => arr1.concat(arr2);

/**
 *
 * @name 向数组前面添加新元素,返回一个新数组
 * @param {Any} item - 要添加的元素
 * @param {array} arr - 数组
 * @returns {array} 新数组
 */


exports.deleteSpecifiedElement = deleteSpecifiedElement;

var mergeArray = function mergeArray(item, arr) {
  return [item].concat(_toConsumableArray(arr));
};
/**
 * 比较两个数组是否含有相同元素，并返回公共元素，否则返回空数组
 * @param {array} arr1 - 数组
 * @param {array} arr2 - 数组
 * @returns {array} - 交集
 */


exports.mergeArray = mergeArray;

var getSameElement = function getSameElement() {
  var arr1 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var arr2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var big, small;

  if (arr1.length >= arr2.length) {
    big = arr1;
    small = arr2;
  } else {
    big = arr2;
    small = arr1;
  }

  return arr1.filter(function (item) {
    return arr2.includes(item);
  });
};

exports.getSameElement = getSameElement;