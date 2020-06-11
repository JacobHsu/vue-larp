//判断對象是否為空
function isEmptyObj(obj) {
  return Object.keys(obj).length > 0;
}
//json數據解析
function formatData(data) {
  if (Object.prototype.toString.call(data) == "[object String]") {
    return JSON.parse(data);
  }
  return JSON.stringify(data);
}
module.exports = {
  isEmptyObj,
  formatData
};
