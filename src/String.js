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
export const randomColor = () => {
  function _format(num) {
    return (num = num.toString().length === 1 ? '0' + num : num);
  }

  let r = Math.round(Math.random() * 255); // 0~254 四舍五入得到 0~255
  let g = Math.round(Math.random() * 255);
  let b = Math.round(Math.random() * 255);

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
export const randomNum = (min, max) => {
  return Math.round(min + Math.random() * (max - min));
};
/**
 * 生成指定长度的随机字符串
 * @param {number} length 指定长度
 * @returns {string} 返回随机字符串
 * 换一种思考，也许你可以直接使用uuid这个库
 */
export const generateRandomString = length => {
  const upperLetters = Array.from({ length: 26 }, (v, index) => {
    // 'A'.charCodeAt(); 65
    // String.fromCharCode(65); // A
    // index 从 0 开始
    // String.fromCharCode(65+25) // Z
    return String.fromCharCode('A'.charCodeAt() + index);
  }).join(''); // ABCDEFGHIJKLMNOPQRSTUVWXYZ
  const lowerLetters = Array.from({ length: 26 }, (v, index) => {
    return String.fromCharCode('a'.charCodeAt() + index);
  }).join(''); // abcdefghijklmnopqrstuvwxyz
  const numbers = '0123456789';
  // abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789
  const characters = lowerLetters + upperLetters + numbers;
  const charactersLength = characters.length;
  let strs = '';
  for (let i = 0; i < length; i++) {
    strs += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return strs;
};

/**
 * 返回已经经过的大致时间，常用于显示别人什么大致时候评论的
 * @param {number} startTime 传入时间戳
 */
export const formatPassTime = startTime => {
  let currentTime = new Date() * 1,
    diff = currentTime - startTime,
    day = parseInt(diff / (1000 * 24 * 3600)),
    hour = parseInt(diff / (1000 * 3600)),
    min = parseInt(diff / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if (year) return `${year} 年前`;
  if (month) return `${month} 月前`;
  if (day) return `${day} 天前`;
  if (hour) return `${hour} 小时前`;
  if (min) return `${min} 分钟前`;
  return '刚刚';
};

/**
 * 返回倒计时时间
 * eg: formatRemainTime(new Date('2021-03-29 03:52:34'))
 * @param {number} endTime 传入时间戳
 */
export const formatRemainTime = endTime => {
  let startDate = new Date() * 1; // 现在, 开始时间
  let endDate = new Date(endTime) * 1; // 结束时间
  let diffTime = endDate - startDate;
  let day = (hour = minute = second = 0);
  if (diffTime <= 0) return '已过期';
  day = Math.floor(diffTime / (1000 * 3600 * 24));
  hour = Math.floor((diffTime / (1000 * 3600)) % 24);
  minute = Math.floor((diffTime / (1000 * 60)) % 60);
  second = Math.floor((diffTime / 1000) % 60);
  console.log(`${day}天,${hour}小时,${minute}分,${second}秒`);
  return [day, hour, minute, second];
};

/**
 * 根据时间戳返回格式化的时间,如 2021-10-12 04:08:23
 * @param {Number} timestamp 时间戳
 */

export const formatTime = (timestamp = 0) => {
  if (typeof timestamp !== 'number') return false;
  const fill_0 = n => (n < 10 ? `0${n}` : n);
  const timer = new Date(timestamp);
  let Nian = timer.getFullYear();
  let Yue = fill_0(timer.getMonth() + 1);
  let Ri = fill_0(timer.getDate());
  let Shi = fill_0(timer.getHours());
  let Fen = fill_0(timer.getMinutes());
  let Miao = fill_0(timer.getSeconds());
  return `${Nian}-${Yue}-${Ri} ${Shi}:${Fen}:${Miao}`;
};

/**
 * 格式化JSON代码
 * 我们都非常熟悉JSON.stringify，但比较少知道的是它还可以进行格式化的输出。
 * stringify 方法有三个参数：value，replacer和space。其中，后两个是可选参数，这也是我们很少知道它的原因。 要缩进JSON，必须使用space参数。
 * @param {object} json JSON 对象
 */
export const formatJson = json => JSON.stringify(json, null, '\t');

/**
 * 根据换行或者回车进行识别把字符串分割成数组
 * @param {string} str 字符串
 * @returns {[]} 返回数组
 */
export const lineBreaksToArray = str => str.split(/[(\r\n)\r\n]+/);

/**
 * 根据字符串索引替换文本
 * @param {string} str
 * @param {number} start
 * @param {number} end
 * @param {string} replaceWith
 * @returns {string} 新字符串
 * @example replaceTheTextAccordingToStringIndex('aaaXXXbbb', 3, 6, 'ZZZ')
 */
export const replaceTheTextAccordingToStringIndex = (
  str,
  start,
  end,
  replaceWith
) => {
  return str.substr(0, start) + replaceWith + str.substr(end);
};
