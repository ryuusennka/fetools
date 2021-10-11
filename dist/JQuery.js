"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractedFromTextImages = void 0;

/*
 * @Author: ryuusennka
 * @Date: 2020-05-11 17:21:22
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-05-14 09:16:27
 * @FilePath: /sennka-tools/src/jQuery.js
 * @Description: jQuery 中的方法
 */

/**
 * 从文本中提取图片，一般用于新闻列表没有封面，只能从内容中提取
 * @param {string} htmlstr html字符串
 * @returns {Array} 结果集
 */
var extractedFromTextImages = function extractedFromTextImages(htmlstr) {
  return Array.prototype.slice.call($(htmlstr).find('img'));
};

exports.extractedFromTextImages = extractedFromTextImages;