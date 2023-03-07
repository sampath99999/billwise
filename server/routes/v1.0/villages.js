const { getAllVillages } = require("../../controllers/village.controller");
const authMiddleware = require("../../middlewares/auth");

const express = require("express");
const router = express.Router();

router.get("/all", authMiddleware, getAllVillages);

module.exports = router;
