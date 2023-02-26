const jwt = require("jsonwebtoken");
const secret = process.env.SECRET;

module.exports = function (req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ message: "Missing or invalid token" });
    }
    jwt.verify(token, secret, (err, user) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        req.user = user.data;
        next();
    });
};
