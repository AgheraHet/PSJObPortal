const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const jobRoutes = require("./routes/jobRoutes");

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(
  cors({
    origin: ["https://psj-ob-portal.vercel.app"], // Allow both local & hosted frontend
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(express.json());

// API Routes
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send("Job Board API is running...");
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
