const fs = require("fs");
const check = require("./datacheck");

function isExitFile(filePath) {
  if (fs.existsSync(filePath)) {
    return true;
  }
  return false;
}

function readFileData(filePath) {
  let data = [];
  try {
    let result = fs.readFileSync(filePath, "utf8");
    data = result ? check.formatData(result) : [];
  } catch (e) {
    //讀取不到文件直接新建data
    return [e, data];
  }
  return [null, data];
}

function writeFileData(filePath, data) {
  try {
    fs.writeFileSync(filePath, tool.formatData(data), "utf8");
  } catch (e) {
    return false;
  }
  return true;
}
/**
 * 遍历目标和原数据是否匹配
 * @param {Array} origin 目标查询的文件总数据
 * @param {Object} target 目标查询字段
 * @return {Boolean} 返回是否匹配上
 */
function isMatch(origin, target) {
  let keys = Object.keys(target);
  //every方法，全部都匹配上了才返回true
  return keys.every(item => target[item] == origin[item]);
}
/**
 * 文件里匹配的记录
 * @param {Array} origin  目标查询的文件总数据
 * @param {Object} target 目标查询字段
 * @return {Array} 返回匹配的数据条
 */
function isRecord(origin, target) {
  let result = origin.filter(item => isMatch(item, target));
  return result;
}
//删除指定数据和目录，返回数据集
function remove(filePath, qField) {
  let [err, result] = readFileData(filePath);
  result.map((item, index) => {
    if (isMatch(item, qField)) {
      result.splice(index, 1);
    }
  });
  fs.unlinkSync(filePath);
  return result;
}

function del(filePath, qField) {
  let result = remove(filePath, qField);
  return writeFileData(filePath, result);
}

function find(filePath, obj = {}) {
  let result = [];
  return new Promise((resolve, reject) => {
    let [err, data] = readFileData(filePath);
    if (err) {
      return resolve(result);
    }
    //查询全部
    if (!check.isEmptyObj(obj)) {
      return resolve(data);
    }
    //过滤匹配的数据
    result = isRecord(data, obj);
    resolve(result);
  });
}

function insert(filePath, data) {
  let [err, result] = readFileData(filePath);
  result.push(data);
  return writeFileData(filePath, result);
}

async function update(filePath, qField, uField) {
  let udata = await find(filePath, qField);
  udata.map(item => {
    Object.keys(uField).map(sub => {
      item[sub] = uField[sub];
    });
  });

  let result = remove(filePath, qField).concat(udata);
  return writeFileData(filePath, result);
}
module.exports = {
  find,
  insert,
  update,
  del
};
