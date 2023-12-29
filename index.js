// /index.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRoutes = require("./src/routes/userRoutes");
const postRoutes = require("./src/routes/postRoutes");
const databaseConfig = require("./config/database");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(databaseConfig.url, databaseConfig.options);

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", userRoutes);
app.use("/api", postRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
