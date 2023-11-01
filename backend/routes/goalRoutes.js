const express = require('express');
const { getGoals, addGoal, updateGoals, deleteGoals } = require('../controllers/goalController');
const router = express.Router()
const {protect} = require("../middleware/authMiddleware")


router.route("/").get(protect, getGoals).post(protect, addGoal)
router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals)


module.exports = router