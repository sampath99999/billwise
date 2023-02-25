const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { getUserByUsername } = require("./user.service");

const loginUser = async function (username, password) {
    let user = await getUserByUsername(username);
    if (!user)
        throw new ApiError(
            httpStatus.UNAUTHORIZED,
            "Username or password is incorrect"
        );
    if (!(await user.checkPassword(password)))
        throw new ApiError(
            httpStatus.UNAUTHORIZED,
            "Username or Password is incorrect"
        );
    if (!user.status)
        throw new ApiError(
            httpStatus.UNAUTHORIZED,
            "Your account was in Inactive state, Please contact your administrator"
        );
    if (!user.networkId.status)
        throw new ApiError(
            httpStatus.UNAUTHORIZED,
            "Network was in Inactive State, Please contact Sales Department"
        );
    return user;
};

module.exports = {
    loginUser,
};
