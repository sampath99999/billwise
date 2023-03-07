const Village = require("../models/villages.model");

const getAll = async function () {
    return await Village.find();
};

module.exports = {
    getAll,
};
