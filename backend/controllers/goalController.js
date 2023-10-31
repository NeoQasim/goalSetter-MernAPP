const asyncHandler = require('express-async-handler');
const goalModel = require("../Models/goalModel")

const getGoals = asyncHandler(async (req, res) => { //@desc Get the Goals ,   @route /api/goals,  @method post  @access Private
    const goals = await goalModel.find()

    res.status(200).json(goals)

})

const addGoal = asyncHandler(async (req, res) => { //@desc Get the Goals ,   @route /api/goals,  @method post  @access Private
    if (!req.body.text) {
        res.status(400)
        throw new Error("please enter the text field")
    }

    const goal = await goalModel.create({
        text: req.body.text
    })

    res.status(200).json(goal) // yaha per agr goal ko {}ka andr likho ga toh sary k sary goals a jayien 
    // gy wrna is tarah sirf wohi goals le kr aye ga jo last time add hwa ha 
})

const updateGoals = asyncHandler(async (req, res) => { //@desc Get the Goals ,   @route /api/goals/:id,  @method put  @access Private
    const id = req.params.id
    const goal = await goalModel.findById(id)
    if (!goal) {
        res.status(400)
        throw new Error("goal not found")
    }
    const updatedGoal = await goalModel.findByIdAndUpdate(id, req.body, { new: true })
    res.status(200).json(updatedGoal)
})

const deleteGoals = asyncHandler(async (req, res) => { //@desc Get the Goals ,   @route /api/goals,  @method delete  @access Private
    const id = req.params.id
    const allgoals = await goalModel.findById(id)
    // const deleteTheGoal = 
    if (!allgoals) {
        res.status(400)
        throw new Error("error completing the delete operation")
    }
    await allgoals.deleteOne()
    res.status(200).json({
        messagess: ` deleted the goal with id ${id} `
    })
}
)




module.exports = { getGoals, addGoal, updateGoals, deleteGoals }