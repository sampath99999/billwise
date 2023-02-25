var jwt = require("jsonwebtoken");
let secret = process.env.SECRET;

module.exports.getToken = function (data) {
    return jwt.sign(
        {
            exp: Math.floor(Date.now() / 1000) + 60 * 60 * 60,
            data,
        },
        secret
    );
};

module.exports.decode = function (token) {
    return jwt.verify(token, secret);
};
