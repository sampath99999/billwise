const express = require("express");
const { login } = require("../../controllers/auth.controller");
const validate = require("../../middlewares/validate");
const { login: loginValidation } = require("../../validators/auth.validator");
const router = express.Router();

router.post("/login", validate(loginValidation), login);

module.exports = router;
