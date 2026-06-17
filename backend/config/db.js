const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ MongoDB Connected Successfully");
    } catch (error) {
        console.log("❌ Database Connection Failed");
        console.error("Name:", error.name);
        console.error("Message:", error.message);
        console.error("Code:", error.code);
        console.error(error);
    }
};

module.exports = connectDB;