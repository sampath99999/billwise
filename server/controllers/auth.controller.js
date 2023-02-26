const httpStatus = require("http-status");
const { comparePassword } = require("../helpers/bcrypt");
const { getToken } = require("../helpers/jwt");
const User = require("../models/user.model");
const { loginUser } = require("../services/auth.service");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");
const logger = require("../utils/logger");

const login = catchAsync(async (req, res) => {
    let user = await loginUser(req.body.username, req.body.password);
    let token = await getToken({
        id: user._id,
        name: user.name,
        networkId: user.networkId._id,
        type: user.role,
    });
    res.status(httpStatus.OK).json({ message: "Success", token, user });
});

const verify = catchAsync(async (req, res) => {
    res.status(httpStatus.OK).json(req.user);
});

module.exports = {
    login,
    verify,
};
