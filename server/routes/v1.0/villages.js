const {
    getAllVillages,
    createVillage,
} = require("../../controllers/village.controller");
const authMiddleware = require("../../middlewares/auth");
const validate = require("../../middlewares/validate");

const express = require("express");
const { newVillage } = require("../../validators/villages.validator");
const router = express.Router();

router.get("/all", authMiddleware, getAllVillages);
router.post("/", validate(newVillage), authMiddleware, createVillage);

module.exports = router;
