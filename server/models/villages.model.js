const mongoose = require("mongoose");

const villageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    networkId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Network",
        required: true,
    },
    status: {
        tye: Boolean,
    },
});

const Village = mongoose.model("Village", villageSchema);

module.exports = Village;
