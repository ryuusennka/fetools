"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handlerPromise = void 0;

/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 13:17:02
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-02-17 02:04:16
 * @FilePath: /sennka-tools/src/Promise.js
 * @Description:
 */
var handlerPromise = function handlerPromise(promise) {
  return promise.then(function (res) {
    return [null, res];
  })["catch"](function (err) {
    return [err, null];
  });
};
/**
 *
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

(async()=>{
  const [err, res] = await handlerPromise(
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
  );
  console.log(err, res);
})()
 */


exports.handlerPromise = handlerPromise;