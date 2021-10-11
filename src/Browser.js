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
export const activeImage2Base64 = (context = window) => {
  context.addEventListener('paste', event => {
    if (event.clipboardData.files.length > 0) {
      const file = event.clipboardData.files[0];
      const fr = new FileReader();
      fr.readAsDataURL(file);
      fr.addEventListener('load', () => {
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
export const outerChainPictureToBase64 = async url => {
  const blob = await fetch(url).then(response => response.blob());
  const filereader = new FileReader();
  filereader.readAsDataURL(blob);
  return filereader;
};

/**
 * 激活文字可以编辑
 * @param {*} context
 */
export const activeBodyEditable = (context = document.body) => {
  context.contentEditable = true;
};

/**
 * [How to detect my browser version and operating system using JavaScript?](https://stackoverflow.com/questions/11219582/how-to-detect-my-browser-version-and-operating-system-using-javascript)
 * [Detect MacOS, iOS, Windows, Android and Linux OS with JS [duplicate]](https://stackoverflow.com/questions/38241480/detect-macos-ios-windows-android-and-linux-os-with-js)
 * 判断用户操作系统
 * @returns {string} String
 */
export const getOS = () => {
  const userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

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
