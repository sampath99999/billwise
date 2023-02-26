const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
require("dotenv").config();
const mongoose = require("mongoose");

const v1Router = require("./routes/v1.0/index");
const Network = require("./models/network.model");
const User = require("./models/user.model");
const { hashPassword } = require("./helpers/bcrypt");
const { errorConverter, errorHandler } = require("./middlewares/error");
const ApiError = require("./utils/ApiError");
const httpStatus = require("http-status");
var cors = require("cors");

const app = express();
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
mongoose.set("strictQuery", true);
mongoose.connect(process.env.DB, (err) => {
    if (err) throw err;
    console.log("Database connected!");
});

app.use("/api/v1/", v1Router);

app.use((req, res, next) => {
    next(new ApiError(httpStatus.NOT_FOUND, "Not found"));
});
// convert error to ApiError, if needed
app.use(errorConverter);
// handle error
app.use(errorHandler);

Network.findOne({ phoneNumber: "9989079159" }, (err, network) => {
    if (err) throw err;
    if (!network) {
        network = new Network({
            name: "Sampath Cable Network",
            email: "sampathbandla199@gmail.com",
            phoneNumber: "9989079159",
            address: "7-25 Prodduturu",
            city: "Khammam",
            state: "Telangana",
            zipcode: "507208",
            status: true,
        });
        network.save();
        console.log("Network Created!");
    }
    User.findOne({ username: "sampath9989" }, async function (err, user) {
        if (err) throw err;
        if (!user) {
            let password = await hashPassword("12345");
            let user = new User({
                name: "Sampath",
                username: "sampath9989",
                password: password,
                networkId: network._id,
                role: "admin",
            });
            user.save();
            console.log("User Created!");
        }
    });
});

module.exports = app;
