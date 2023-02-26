const express = require("express");
const { login, verify } = require("../../controllers/auth.controller");
const validate = require("../../middlewares/validate");
const { login: loginValidation } = require("../../validators/auth.validator");
const router = express.Router();
const authMiddleware = require("../../middlewares/auth");

router.post("/login", validate(loginValidation), login);
router.get("/verify", authMiddleware, verify);

module.exports = router;
