const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const userModel = require("../Models/userModel");


const registerUser = asyncHandler(async (req, res) => {//@desc Register user, @route /api/users,  @method POST  @access Public

    const { name, email, password } = req.body

    if (!name || !email || !password) {
        res.status(400)
        throw new Error("Please enter all the Desired fields")
    }
    const userExists = await userModel.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error("User already exists.")
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await userModel.create({
        name,
        email,
        password: hashedPassword,

    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(userModel._id)

        })

    } else {
        res.status(400)
        throw new Error("invalid user data")
    }

}
)
const loginUser = asyncHandler(async (req, res) => {//@desc Login the user , @route /api/users/login,  @method POST  @access Public
    const { email, password } = req.body
    if (!email || !password) {
        throw new Error('please enter all the fields')
    }
    const userExists = await userModel.findOne({ email })
    if (!userExists) {
        throw new Error("no user found or incorreect email")
    }

    const compare = await bcrypt.compare(password, userExists.password)
    if (userExists && compare) {
        res.json({
            id: userExists._id,
            name: userExists.name,
            email: userExists.email,
            password: userExists.password,
            token: generateToken(userExists._id)
        })
    } else {
        throw new Error("invalid Credentials ")
    }
})
const getUser = asyncHandler(async (req, res) => {//@desc Get the User data , @route /api/users/me,  @method POST  @access Public
    const { _id, name, email, password } = await userModel.findById(req.user.id)
    res.status(200)
        .json(req.user)
}
)




const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "24hr" })
}
module.exports = {
    registerUser, loginUser, getUser
}
