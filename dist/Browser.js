"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.outerChainPictureToBase64 = exports.getOS = exports.activeImage2Base64 = exports.activeBodyEditable = void 0;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 11:23:25
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-08-11 17:05:15
 * @FilePath: /sennka-tools/src/Browser.js
 * @Description: 浏览器的方法，如激活粘贴图片转base64,让body可以编辑，解文字不能复制
 */

/**
 * 激活粘贴图片转base64
 * @param {*} context
 */
var activeImage2Base64 = function activeImage2Base64() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;
  context.addEventListener('paste', function (event) {
    if (event.clipboardData.files.length > 0) {
      var file = event.clipboardData.files[0];
      var fr = new FileReader();
      fr.readAsDataURL(file);
      fr.addEventListener('load', function () {
        console.log(fr.result);
      });
    }
  });
};
/**
 * 返回 filereader 对象
 * @param {string} url
 * @returns Promise
 * @example outerChainPictureToBase64(url).then(filereader=>{console.log(filereader)})
 */


exports.activeImage2Base64 = activeImage2Base64;

var outerChainPictureToBase64 = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {
    var blob, filereader;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return fetch(url).then(function (response) {
              return response.blob();
            });

          case 2:
            blob = _context.sent;
            filereader = new FileReader();
            filereader.readAsDataURL(blob);
            return _context.abrupt("return", filereader);

          case 6:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function outerChainPictureToBase64(_x) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 激活文字可以编辑
 * @param {*} context
 */


exports.outerChainPictureToBase64 = outerChainPictureToBase64;

var activeBodyEditable = function activeBodyEditable() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
  context.contentEditable = true;
};
/**
 * [How to detect my browser version and operating system using JavaScript?](https://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript)
 * [Detect MacOS, iOS, Windows, Android and Linux OS with JS [duplicate]](https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js)
 * 判断用户操作系统
 * @returns {string} String
 */


exports.activeBodyEditable = activeBodyEditable;

var getOS = function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  var os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
};

exports.getOS = getOS;