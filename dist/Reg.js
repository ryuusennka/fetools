"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.numberToMoney = void 0;

/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 13:17:02
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-05-26 17:59:35
 * @FilePath: /sennka-tools/src/Reg.js
 * @Description:
 */
// 金额每三位逗号隔开
var numberToMoney = function numberToMoney(number) {
  var p = /\B(?=(\d{3})+\b)/g;
  number = number.toString().split('.');
  if (number[1]) return number[0].replace(p, ',') + '.' + number[1];
  return number[0].replace(p, ',');
};

exports.numberToMoney = numberToMoney;