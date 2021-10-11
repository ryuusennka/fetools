/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 13:17:02
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-05-26 18:00:53
 * @FilePath: /sennka-tools/src/Number.js
 * @Description:
 */

/**
 * 生成一个指定范围内的随机数
 * @param {number}} min
 * @param {number} max
 * @returns {Number} result
 */
export const generateSpecifiedRangeRandomNumbers = (min, max) => {
  return Math.random() * (max - min) + min;
  // eg: generateSpecifiedRangeRandomNumbers(3,5)
  // output: 4.257538027114805
  // 如果想要得到整数，可以用 Math.round(result) 处理下结果
  // 即 Math.round(generateSpecifiedRangeRandomNumbers(3,5))
};

/**
 * 二进制转十进制
 * @param {string} str 二进制字符串 如 1100100 (100)
 */
export const parseInt2 = str => parseInt(str, 2);

/**
 * 金额每三位逗号隔开 old method
 * @param {number} num 数字
 */
export const numberToMoneyOld = num => {
  var tmp = num.toString().split('.');
  var len = Math.ceil(tmp[0].length / 3);
  if (tmp[0].length < len * 3) {
    const fillLen = len * 3 - tmp[0].length;
    const fill0 = new Array(fillLen).fill(0).join('');
    tmp[0] = fill0 + tmp[0];
  }
  var tmparr = [];
  for (let i = 1; i <= len; i++) {
    tmparr.unshift(tmp[0].substr(-i * 3, 3));
  }
  tmparr[0] = Number(tmparr[0]);
  if (tmp[1]) return tmparr.join(',') + '.' + tmp[1];
  return tmparr.join(',');
};

/**
 * 把加逗号的金额转为数字
 * @param {string} str 数字字符串
 */
const deNumberToMoney = str => Number(str.replace(/,/g, ''));
