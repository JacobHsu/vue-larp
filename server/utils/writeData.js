const fs = require("fs");
const path = require("path");
const dataIO = require("./dataio");

/**
 * @param {Function} requestA 请求方法
 * @param {Object} data 请求参数
 * @param {String} fileName 寫入數據的文件名
 * @param {Boolean} isCache 是否從本地拿數據 預設是
 */
const preAjax = (requestA, data = {}, fileName, isCache = true) => {
  let mockFilePath = path.resolve(__dirname, `../mock/${fileName}.json`);
  return new Promise(async (resolve, reject) => {
    if (isCache) {
      let result = await dataIO.find(mockFilePath);
      if (result.length > 0) {
        return resolve(result);
      }
      result = await requestA(data);
      resolve(result);
      fs.writeFileSync(mockFilePath, JSON.stringify(result), "utf-8");
    } else {
      let result = await requestA(data);
      resolve(result);
    }
  });
};
module.exports = preAjax;
