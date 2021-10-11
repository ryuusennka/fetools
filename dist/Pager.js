"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

/*
 * @Author: ryuusennka
 * @Date: 2020-05-15 10:52:29
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-05-15 18:00:11
 * @FilePath: /sennka-tools/src/Pager.js
 * @Description: 分页插件
 */

/**
 *
 * @param {string} selector  如 id(#id), 类名(.class)
 * @param {object} options 必传
 * @param {number} options.totalElements 总记录数
 * @param {number} options.size 每页记录数
 * @param {number} options.links 显示多少个页码,建议填写奇数
 * @param {number} options.page 当前是第几页
 * @param {Function} cb 回调函数，比如处理 ajax
 */
function Pager(selector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var cb = arguments.length > 2 ? arguments[2] : undefined;
  if (!(this instanceof Pager)) return new Pager(selector, options, cb);
  if (cb) this.cb = cb;
  this.selector = selector;
  this.el = document.querySelector(selector);

  for (var k in options) {
    this[k] = Number(options[k]);
  }

  this.searchParamStr = window.location.search.substr(1);
  this.hash = window.location.hash;
  this.searchParamObj = this.stringToObject(this.searchParamStr); // 以传入的page为主，否则从url上面取page

  if (this.page) {
    this.searchParamObj['page'] = this.page;
  } else if (this.searchParamObj['page']) {
    this.page = this.searchParamObj['page'] *= 1;
  } // 计算 totalPages


  this.totalPages = Math.ceil(this.totalElements / this.size); // 计算 links

  var leftNum = Math.floor(this.links / 2);
  var left = Math.max(1, this.page - leftNum);
  var right = Math.min(this.totalPages, left + this.links - 1);
  left = Math.max(1, right - this.links + 1);
  this.pageLinks = [];

  for (var i = left; i <= right; i++) {
    this.pageLinks.push({
      page: i
    });
  }
}

Pager.prototype = {
  /**
   * query字符串转对象
   * @param {string} str 需要被转换成对象的字符串
   */
  stringToObject: function stringToObject(str) {
    var param = Array.prototype.slice.call(str.split('&'));
    var o = {};

    for (var i = 0; i < param.length; i++) {
      o[param[i].split('=')[0]] = param[i].split('=')[1];
    }

    return o;
  },

  /**
   * 对象转query字符串
   * @param {object} obj 需要被转换成字符串的对象
   */
  objectToString: function objectToString(obj) {
    var str = '';

    for (var k in obj) {
      str += "".concat(k, "=").concat(obj[k], "&");
    }

    str = str.substr(0, str.length - 1);
    return str;
  },

  /**
   * 保留query传参生成页码
   * @param {number} page 页码
   * @return {String} 返回search和hash
   */
  generateLink: function generateLink(page) {
    this.searchParamObj['page'] = page;
    return '?' + this.objectToString(this.searchParamObj) + this.hash;
  },

  /**
   * 输出自定义分页
   */
  renderPageStyle1: function renderPageStyle1() {
    // -----select-----
    var selectStr = '';
    var optionStr = '';

    for (var i = 1; i <= this.totalPages; i++) {
      if (this.page === i) {
        optionStr += "<option value=\"".concat(i, "\" selected>\u7B2C").concat(i, "\u9875</option>");
      } else {
        optionStr += "<option value=\"".concat(i, "\">\u7B2C").concat(i, "\u9875</option>");
      }
    }

    selectStr += "<select id=\"topage\">".concat(optionStr, "</select>"); // -----links-----

    var links = ''; // 首页

    var firstLink = "<a href=\"".concat(this.generateLink(1), "\">\u9996\u9875</a>");
    links += firstLink; // 拼接首页
    // 上一页
    // prettier-ignore

    var previousPage = "<a href=\"".concat(this.generateLink(Math.max(1, this.page - 1)), "\">\u4E0A\u4E00\u9875</a>");
    links += previousPage; // 拼接上一页
    // 下一页
    // prettier-ignore

    var nextLink = "<a href=\"".concat(this.generateLink(Math.min(this.page + 1, this.totalPages)), "\">\u4E0B\u4E00\u9875</a>"); // 尾页

    var lastLink = "<a href=\"".concat(this.generateLink(this.totalPages), "\">\u5C3E\u9875</a>"); // 拼接页码

    for (var _i = 0; _i < this.pageLinks.length; _i++) {
      var page = this.pageLinks[_i]['page'];

      if (page === this.page) {
        // prettier-ignore
        links += "<a href=\"".concat(this.generateLink(page), "\" class=\"current\">").concat(page, "</a>");
      } else {
        links += "<a href=\"".concat(this.generateLink(page), "\">").concat(page, "</a>");
      }
    }

    links += nextLink; // 拼接下一页

    links += lastLink; // 拼接尾页
    // 可能额外展示信息

    var info = "<span>\u603B\u8BB0\u5F55\u6570:<span>".concat(this.totalElements, "</span></span>"); // 样式渲染

    var style = document.createElement('style');
    var cssText = "".concat(this.selector, " select {display: inline-block;}\n").concat(this.selector, " a {display: inline-block;border: 1px solid #ddd;padding: .2em .4em;margin: 0 .3em;}\n").concat(this.selector, " a.current {background: #999;}");
    style.innerHTML = cssText;
    this.el.innerHTML = selectStr + links + info;
    document.querySelector('head').appendChild(style); // 执行回调函数

    if (this.cb) this.cb();
  }
};
var _default = Pager;
exports["default"] = _default;