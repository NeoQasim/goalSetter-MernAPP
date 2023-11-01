const express = require('express');
const { errorHandler } = require('./middleware/errorMiddleware');
const dotenv = require("dotenv").config()
const port = process.env.port
const colors = require('colors');
const app = express()
const connectDB = require("./Config/db")
connectDB()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use("/api/goals", require("./routes/goalRoutes"))
app.use("/api/users", require("./routes/userRoutes"))
app.use(errorHandler)
app.listen(port, () => { console.log(`server started on ${port}`) })
console.log("nodemomn server working");