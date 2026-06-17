const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db");

const projectRoutes = require("./routes/projectRoutes");
const contactRoutes=require("./routes/contactRoutes");
const app = express();

connectDB();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Portfolio Backend Running");
});

// Project Routes
app.use("/api/projects", projectRoutes);
app.use("/api/contact",contactRoutes);
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on ${PORT}`);

});