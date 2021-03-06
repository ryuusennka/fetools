"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.replaceTheTextAccordingToStringIndex = exports.randomNum = exports.randomColor = exports.lineBreaksToArray = exports.generateRandomString = exports.formatTime = exports.formatRemainTime = exports.formatPassTime = exports.formatJson = void 0;

/*
 * @Author        : ryuusennka
 * @Date          : 2020-04-22 16:38:38
 * @LastEditors   : ryuusennka
 * @LastEditTime  : 2021-10-12 04:36:54
 * @FilePath      : /fetools/src/String.js
 * @Description   :
 */

/**
 * 获取 hex 随机颜色
 * @returns {String} 十六进制颜色
 */
var randomColor = function randomColor() {
  function _format(num) {
    return num = num.toString().length === 1 ? '0' + num : num;
  }

  var r = Math.round(Math.random() * 255); // 0~254 四舍五入得到 0~255

  var g = Math.round(Math.random() * 255);
  var b = Math.round(Math.random() * 255);
  r = _format(r.toString(16));
  g = _format(g.toString(16));
  b = _format(b.toString(16));
  return r + '' + g + '' + b;
};
/**
 * 生成一个指定范围内的随机数
 * @param {number} min
 * @param {number} max
 */


exports.randomColor = randomColor;

var randomNum = function randomNum(min, max) {
  return Math.round(min + Math.random() * (max - min));
};
/**
 * 生成指定长度的随机字符串
 * @param {number} length 指定长度
 * @returns {string} 返回随机字符串
 * 换一种思考，也许你可以直接使用uuid这个库
 */


exports.randomNum = randomNum;

var generateRandomString = function generateRandomString(length) {
  var upperLetters = Array.from({
    length: 26
  }, function (v, index) {
    // 'A'.charCodeAt(); 65
    // String.fromCharCode(65); // A
    // index 从 0 开始
    // String.fromCharCode(65+25) // Z
    return String.fromCharCode('A'.charCodeAt() + index);
  }).join(''); // ABCDEFGHIJKLMNOPQRSTUVWXYZ

  var lowerLetters = Array.from({
    length: 26
  }, function (v, index) {
    return String.fromCharCode('a'.charCodeAt() + index);
  }).join(''); // abcdefghijklmnopqrstuvwxyz

  var numbers = '0123456789'; // abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789

  var characters = lowerLetters + upperLetters + numbers;
  var charactersLength = characters.length;
  var strs = '';

  for (var i = 0; i < length; i++) {
    strs += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return strs;
};
/**
 * 返回已经经过的大致时间，常用于显示别人什么大致时候评论的
 * @param {number} startTime 传入时间戳
 */


exports.generateRandomString = generateRandomString;

var formatPassTime = function formatPassTime(startTime) {
  var currentTime = new Date() * 1,
      diff = currentTime - startTime,
      day = parseInt(diff / (1000 * 24 * 3600)),
      hour = parseInt(diff / (1000 * 3600)),
      min = parseInt(diff / (1000 * 60)),
      month = parseInt(day / 30),
      year = parseInt(month / 12);
  if (year) return "".concat(year, " \u5E74\u524D");
  if (month) return "".concat(month, " \u6708\u524D");
  if (day) return "".concat(day, " \u5929\u524D");
  if (hour) return "".concat(hour, " \u5C0F\u65F6\u524D");
  if (min) return "".concat(min, " \u5206\u949F\u524D");
  return '刚刚';
};
/**
 * 返回倒计时时间
 * eg: formatRemainTime(new Date('2021-03-29 03:52:34'))
 * @param {number} endTime 传入时间戳
 */


exports.formatPassTime = formatPassTime;

var formatRemainTime = function formatRemainTime(endTime) {
  var startDate = new Date() * 1; // 现在, 开始时间

  var endDate = new Date(endTime) * 1; // 结束时间

  var diffTime = endDate - startDate;
  var day = hour = minute = second = 0;
  if (diffTime <= 0) return '已过期';
  day = Math.floor(diffTime / (1000 * 3600 * 24));
  hour = Math.floor(diffTime / (1000 * 3600) % 24);
  minute = Math.floor(diffTime / (1000 * 60) % 60);
  second = Math.floor(diffTime / 1000 % 60);
  console.log("".concat(day, "\u5929,").concat(hour, "\u5C0F\u65F6,").concat(minute, "\u5206,").concat(second, "\u79D2"));
  return [day, hour, minute, second];
};
/**
 * 根据时间戳返回格式化的时间,如 2021-10-12 04:08:23
 * @param {Number} timestamp 时间戳
 */


exports.formatRemainTime = formatRemainTime;

var formatTime = function formatTime() {
  var timestamp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  if (typeof timestamp !== 'number') return false;

  var fill_0 = function fill_0(n) {
    return n < 10 ? "0".concat(n) : n;
  };

  var timer = new Date(timestamp);
  var Nian = timer.getFullYear();
  var Yue = fill_0(timer.getMonth() + 1);
  var Ri = fill_0(timer.getDate());
  var Shi = fill_0(timer.getHours());
  var Fen = fill_0(timer.getMinutes());
  var Miao = fill_0(timer.getSeconds());
  return "".concat(Nian, "-").concat(Yue, "-").concat(Ri, " ").concat(Shi, ":").concat(Fen, ":").concat(Miao);
};
/**
 * 格式化JSON代码
 * 我们都非常熟悉JSON.stringify，但比较少知道的是它还可以进行格式化的输出。
 * stringify 方法有三个参数：value，replacer和space。其中，后两个是可选参数，这也是我们很少知道它的原因。 要缩进JSON，必须使用space参数。
 * @param {object} json JSON 对象
 */


exports.formatTime = formatTime;

var formatJson = function formatJson(json) {
  return JSON.stringify(json, null, '\t');
};
/**
 * 根据换行或者回车进行识别把字符串分割成数组
 * @param {string} str 字符串
 * @returns {[]} 返回数组
 */


exports.formatJson = formatJson;

var lineBreaksToArray = function lineBreaksToArray(str) {
  return str.split(/[(\r\n)\r\n]+/);
};
/**
 * 根据字符串索引替换文本
 * @param {string} str
 * @param {number} start
 * @param {number} end
 * @param {string} replaceWith
 * @returns {string} 新字符串
 * @example replaceTheTextAccordingToStringIndex('aaaXXXbbb', 3, 6, 'ZZZ')
 */


exports.lineBreaksToArray = lineBreaksToArray;

var replaceTheTextAccordingToStringIndex = function replaceTheTextAccordingToStringIndex(str, start, end, replaceWith) {
  return str.substr(0, start) + replaceWith + str.substr(end);
};

exports.replaceTheTextAccordingToStringIndex = replaceTheTextAccordingToStringIndex;