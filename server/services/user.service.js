const User = require("../models/user.model");
const Network = require("../models/network.model");
const getUserByUsername = async (username) => {
    return await User.findOne({ username }).populate({
        path: "networkId",
        select: "status",
    });
};

module.exports = {
    getUserByUsername,
};
