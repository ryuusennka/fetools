/*
 * @Author: ryuusennka
 * @Date: 2020-04-30 13:17:02
 * @LastEditors: ryuusennka
 * @LastEditTime: 2021-02-17 02:04:16
 * @FilePath: /sennka-tools/src/Promise.js
 * @Description:
 */
export const handlerPromise = promise =>
  promise.then(res => [null, res]).catch(err => [err, null]);

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
