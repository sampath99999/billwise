const Village = require("../models/villages.model");

const getAll = async function () {
    return await Village.find();
};

const createVillage = async function (village) {
    let villagee = new Village({
        name: village.name,
        networkId: village.networkId,
    });
    await villagee.save();
    return village;
};

module.exports = {
    getAll,
    createVillage,
};
