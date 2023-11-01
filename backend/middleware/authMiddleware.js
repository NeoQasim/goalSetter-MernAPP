const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const userModel = require("../Models/userModel")

const protect = asyncHandler(async (req, res, next) => {
    let token
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        try {
            token = req.headers.authorization.split(" ")[1]
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await userModel.findById(decode.id);
            next()
        } catch (error) {
            console.log(error);
            res.status(401)
            throw new Error("not authorized")
        }
    }
    if (!token) {
        res.status(401)
        throw new Error("not authorized no token")
    }
})

module.exports = { protect }