const bcrypt = require("bcrypt");
const saltRounds = process.env.SALT_ROUNDS || 10;
module.exports.hashPassword = async function (password) {
    return bcrypt.hashSync(password, saltRounds);
};
module.exports.comparePassword = async function (password, hash) {
    return bcrypt.compareSync(password, hash);
};
