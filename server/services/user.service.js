const User = require("../models/user.model");

const getUserByUsername = async (username) => {
    return await User.findOne({ username }).populate({
        path: "networkId",
        select: "status",
    });
};

module.exports = {
    getUserByUsername,
};
