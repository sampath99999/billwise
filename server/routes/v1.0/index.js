const express = require("express");
const router = express.Router();

const usersRouter = require("./users");
const villagesRouter = require("./villages");

router.use("/users/", usersRouter);
router.use("/villages/", villagesRouter);

module.exports = router;
