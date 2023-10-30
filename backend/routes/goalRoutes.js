const express = require('express');
const { getGoals, addGoal, updateGoals, deleteGoals } = require('../controllers/goalController');
const router = express.Router()


router.route("/").get(getGoals).post(addGoal)
router.route("/:id").put(updateGoals).delete(deleteGoals)


module.exports = router