const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        const connectMsg = "mongoDB Connected on"
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(` ${connectMsg.bgYellow} ${conn.connection.host.bgBlue}`.bold);
    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

module.exports = connectDB