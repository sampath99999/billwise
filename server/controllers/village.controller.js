const httpStatus = require("http-status");
const { getAll } = require("../services/villages.service");
const catchAsync = require("../utils/catchAsync");

const getAllVillages = catchAsync(async function (req, res) {
    let villages = await getAll();
    res.status(httpStatus.OK).json({
        data: villages,
    });
});

module.exports = {
    getAllVillages,
};
