"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getQueryString = exports.getParameterByName = exports.deBounce = exports.backTopSlow = exports.$$ = void 0;

/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 13:17:02
 * @LastEditors: ryuusennka
 * @LastEditTime: 2020-05-20 01:13:07
 * @FilePath: /sennka-tools/src/Dom.js
 * @Description:
 */

/**
 * 获取数组形式的 dom nodelist,以便使用数组方法
 * @param {*} selector
 * @param {*} context
 */
var $$ = function $$(selector) {
  var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : document;
  var elements = context.querySelectorAll(selector);
  return Array.prototype.slice.call(elements);
};
/**
 * https://davidwalsh.name/query-string-javascript?a=b&foo=bar#bigfoot
 * 获取 query string
 * @param {*} name
 */


exports.$$ = $$;

var getQueryString = function getQueryString(name) {
  var urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
};
/**
 * https://stackoverflow.com/questions/901115/how-can-i-get-query-string-values-in-javascript
 * @param {*} name
 * @param {*} url
 */


exports.getQueryString = getQueryString;

var getParameterByName = function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
/**
 * 返回顶部过渡效果
 */


exports.getParameterByName = getParameterByName;

var backTopSlow = function () {
  function callback() {
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    moveUp(scrollTop);
    var slow = requestAnimationFrame(callback);
    if (scrollTop === 0) cancelAnimationFrame(slow);
  }

  function moveUp(distance) {
    window.scrollTo(0, distance - distance / 20);
  }

  return callback;
}();
/**
 * 防抖,高频事件在单位时间内只触发一次，如果单位时间内再次触发，则重新计算时间
 * 常用于搜索框的输入，只获取最后输入
 * @param {Function} func 要执行的函数
 * @param {number} wait 等待时间(ms)，如果等待时间内再次触发则重新计算时间
 * @returns {Function}
 */


exports.backTopSlow = backTopSlow;

var deBounce = function deBounce(func, wait) {
  var timer;
  return function () {
    var _arguments = arguments,
        _this = this;

    timer && clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(_this, _arguments);
    }, wait);
  };
}; // 时间戳版节流


exports.deBounce = deBounce;

var throttle1 = function throttle1(func, wait) {
  var start = 0;
  return function () {
    var now = Date.now();

    if (now - start >= wait) {
      func.apply(this, arguments);
      start = now;
    }
  };
}; // 定时器版节流


var throttle2 = function throttle2(func, wait, immediately) {
  var canRun = true;
  return function () {
    var _arguments2 = arguments,
        _this2 = this;

    if (!canRun) return;
    canRun = false;

    if (immediately) {
      func.apply(this, arguments);
      immediately = !immediately;
      canRun = true;
    } else {
      setTimeout(function () {
        func.apply(_this2, _arguments2);
        canRun = true;
      }, wait);
    }
  };
};