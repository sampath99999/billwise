const mongoose = require("mongoose");
const { comparePassword } = require("../helpers/bcrypt");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            minlength: 3,
            maxlength: 20,
        },
        password: {
            type: String,
            required: true,
        },
        logo: {
            type: String,
            trim: true,
        },
        networkId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Network",
            required: true,
        },
        status: {
            type: Boolean,
            default: true,
        },
        role: {
            type: String,
            enum: ["admin", "employee"],
            default: "employee",
        },
    },
    {
        timestamps: true,
    }
);

userSchema.methods.checkPassword = async function (password) {
    return await comparePassword(password, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
