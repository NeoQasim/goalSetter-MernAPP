

const getGoals = (req, res) => { //@desc Get the Goals ,   @route /api/goals,  @method post  @access Private
    res.status(200).json({
        messagess: "get goal "
    })
}
const addGoal = (req, res) => { //@desc Get the Goals ,   @route /api/goals,  @method post  @access Private
    if (!req.body.text) {
        res.status(400)
        throw new Error("please enter the text field")
    }
    res.status(400).json({ messagess: "this text is added from body" })
}
const updateGoals = (req, res) => { //@desc Get the Goals ,   @route /api/goals/:id,  @method put  @access Private
    res.status(200).json({
        messagess: ` updated the goal with id ${req.params.id} `
    })
}
const deleteGoals = (req, res) => { //@desc Get the Goals ,   @route /api/goals,  @method delete  @access Private
    res.status(200).json({
        messagess: ` deleted the goal with id ${req.params.id} `
    })
}


module.exports = { getGoals, addGoal, updateGoals, deleteGoals }