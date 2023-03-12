const winston = require("winston");

const levels = {
    error: 0,
    warn: 1,
    info: 2,
    debug: 3,
};
const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [new winston.transports.File({ filename: "./logs/app.log" })],
});

module.exports = logger;
