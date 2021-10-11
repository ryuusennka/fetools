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
function Pager(selector, options = {}, cb) {
  if (!(this instanceof Pager)) return new Pager(selector, options, cb);
  if (cb) this.cb = cb;
  this.selector = selector;
  this.el = document.querySelector(selector);
  for (var k in options) {
    this[k] = Number(options[k]);
  }
  this.searchParamStr = window.location.search.substr(1);
  this.hash = window.location.hash;
  this.searchParamObj = this.stringToObject(this.searchParamStr);
  // 以传入的page为主，否则从url上面取page
  if (this.page) {
    this.searchParamObj['page'] = this.page;
  } else if (this.searchParamObj['page']) {
    this.page = this.searchParamObj['page'] *= 1;
  }
  // 计算 totalPages
  this.totalPages = Math.ceil(this.totalElements / this.size);
  // 计算 links
  const leftNum = Math.floor(this.links / 2);
  let left = Math.max(1, this.page - leftNum);
  const right = Math.min(this.totalPages, left + this.links - 1);
  left = Math.max(1, right - this.links + 1);
  this.pageLinks = [];
  for (let i = left; i <= right; i++) {
    this.pageLinks.push({ page: i });
  }
}

Pager.prototype = {
  /**
   * query字符串转对象
   * @param {string} str 需要被转换成对象的字符串
   */
  stringToObject(str) {
    const param = Array.prototype.slice.call(str.split('&'));
    const o = {};
    for (let i = 0; i < param.length; i++) {
      o[param[i].split('=')[0]] = param[i].split('=')[1];
    }
    return o;
  },
  /**
   * 对象转query字符串
   * @param {object} obj 需要被转换成字符串的对象
   */
  objectToString(obj) {
    let str = '';
    for (let k in obj) {
      str += `${k}=${obj[k]}&`;
    }
    str = str.substr(0, str.length - 1);
    return str;
  },
  /**
   * 保留query传参生成页码
   * @param {number} page 页码
   * @return {String} 返回search和hash
   */
  generateLink(page) {
    this.searchParamObj['page'] = page;
    return '?' + this.objectToString(this.searchParamObj) + this.hash;
  },
  /**
   * 输出自定义分页
   */
  renderPageStyle1() {
    // -----select-----
    let selectStr = '';
    let optionStr = '';
    for (let i = 1; i <= this.totalPages; i++) {
      if (this.page === i) {
        optionStr += `<option value="${i}" selected>第${i}页</option>`;
      } else {
        optionStr += `<option value="${i}">第${i}页</option>`;
      }
    }
    selectStr += `<select id="topage">${optionStr}</select>`;

    // -----links-----
    let links = '';
    // 首页
    let firstLink = `<a href="${this.generateLink(1)}">首页</a>`;
    links += firstLink; // 拼接首页
    // 上一页
    // prettier-ignore
    let previousPage = `<a href="${this.generateLink(Math.max(1, this.page - 1))}">上一页</a>`;
    links += previousPage; // 拼接上一页
    // 下一页
    // prettier-ignore
    let nextLink = `<a href="${this.generateLink(Math.min(this.page + 1, this.totalPages))}">下一页</a>`;
    // 尾页
    let lastLink = `<a href="${this.generateLink(this.totalPages)}">尾页</a>`;
    // 拼接页码
    for (let i = 0; i < this.pageLinks.length; i++) {
      const page = this.pageLinks[i]['page'];
      if (page === this.page) {
        // prettier-ignore
        links += `<a href="${this.generateLink(page)}" class="current">${page}</a>`;
      } else {
        links += `<a href="${this.generateLink(page)}">${page}</a>`;
      }
    }
    links += nextLink; // 拼接下一页
    links += lastLink; // 拼接尾页
    // 可能额外展示信息
    let info = `<span>总记录数:<span>${this.totalElements}</span></span>`;
    // 样式渲染
    const style = document.createElement('style');
    const cssText = `${this.selector} select {display: inline-block;}
${this.selector} a {display: inline-block;border: 1px solid #ddd;padding: .2em .4em;margin: 0 .3em;}
${this.selector} a.current {background: #999;}`;
    style.innerHTML = cssText;
    this.el.innerHTML = selectStr + links + info;
    document.querySelector('head').appendChild(style);
    // 执行回调函数
    if (this.cb) this.cb();
  },
};

export default Pager;
