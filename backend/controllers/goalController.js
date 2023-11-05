const asyncHandler = require('express-async-handler');
const goalModel = require("../Models/goalModel");
const userModel = require('../Models/userModel');

const getGoals = asyncHandler(async (req, res) => { //@desc Get the Goals ,   @route /api/goals,  @method post  @access Private
    const goals = await goalModel.find({ user: req.user.id })

    res.status(200).json(goals)

})

const addGoal = asyncHandler(async (req, res) => { //@desc Get the Goals ,   @route /api/goals,  @method post  @access Private
    if (!req.body.text) {
        res.status(400)
        throw new Error("please enter the text field")
    }

    const goal = await goalModel.create({
        text: req.body.text,
        user: req.user.id

    })

    res.status(200).json( goal) // yaha per agr goal ko {}ka andr likho ga toh sary k sary goals a jayien 
    // gy wrna is tarah sirf wohi goals le kr aye ga jo last time add hwa ha 
})

const updateGoals = asyncHandler(async (req, res) => { //@desc Get the Goals ,   @route /api/goals/:id,  @method put  @access Private
    const id = req.params.id
    const goal = await goalModel.findById(id)

    if (!goal) {
        res.status(401)
        throw new Error("goal not found")
    }

    // const user = await userModel.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error("user not found during updating the goal")
    }
    if (goal.user.toString() !== req.user.id) {
        return res.status(401).json({ message: "User not authorized to update this goal" });
    }
    const updatedGoal = await goalModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json( updatedGoal )



})

const deleteGoals = asyncHandler(async (req, res) => { //@desc Get the Goals ,   @route /api/goals,  @method delete  @access Private
    const id = req.params.id
    const goal = await goalModel.findById(id)
    if (!goal) {
        res.status(400)
        throw new Error("Goal not found")
    }
    // const user = await userModel.findById(req.user.id)
    if (!user) {
        res.status(401)
        throw new Error("user not found during deleting the goal")
    }

    if (goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error("user not authorized invalid id found during deleting the goal")
    }


    await goal.deleteOne()
    res.status(200).json({
        messagess: ` deleted the goal with id ${id} `
    })
}
)




module.exports = { getGoals, addGoal, updateGoals, deleteGoals }