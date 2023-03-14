const httpStatus = require("http-status");
const {
    getAll,
    createVillage: newVillage,
} = require("../services/villages.service");
const catchAsync = require("../utils/catchAsync");

const getAllVillages = catchAsync(async function (req, res) {
    let villages = await getAll();
    res.status(httpStatus.OK).json({
        data: villages,
    });
});

const createVillage = catchAsync(async function (req, res) {
    let name = req.body.name;
    let networkId = req.user.networkId;
    await newVillage({
        name,
        networkId,
    });
    res.status(httpStatus.OK, { message: "Village Created Successfully" });
});

module.exports = {
    getAllVillages,
    createVillage,
};
