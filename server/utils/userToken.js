const config = require("../config.json");
const jwt = require("jsonwebtoken");

/**
 * //添加token驗證
 * @param {Object} payload //載體訊息,額外加密的訊息
 * @param {Date} expiresIn //過期時間
 * @return {String} //返回一個sign的token
 */
function addToken(payload, expiresIn) {
  return jwt.sign(payload, config.secretOrKey, expiresIn);
}

/**
 * //驗證token
 * @param {String} token //前台带過來的token
 * @return {Promise} //返回一個自定義的狀態碼 50001：token無效，50002：過期
 */
function verifyToken(token) {
  return new Promise((resolve, reject) => {
    if (token) {
      jwt.verify(token, config.secretOrKey, (err, decoded) => {
        if (err) {
          switch (err.name) {
            case "JsonWebTokenError":
              resolve(50001);
              break;
            case "TokenExpiredError":
              resolve(50002);
              break;
          }
        } else {
          resolve(0);
        }
      });
    } else {
      resolve(50001);
    }
  });
}
module.exports = {
  addToken,
  verifyToken
};
