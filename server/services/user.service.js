const User = require("../models/user.model");
const Network = require("../models/network.model");
const getUserByUsername = async (username) => {
    return await User.findOne({ username })
        // .select({
        //     id: 1,
        //     name: 1,
        //     username: 1,
        //     role: 1,
        //     networkId: 1,
        //     role: 1,
        //     status: 1,
        //     password: 1,
        // })
        .populate({
            path: "networkId",
            select: "status",
        });
};

module.exports = {
    getUserByUsername,
};
