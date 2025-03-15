const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://jarvis2799:BpltlpheQDic6uRy@cluster0.rqlv6.mongodb.net/",
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        },
        { collection: "linkedin_jobs" }
      )
      .then(() => {
        console.log("Connected to MongoDB!");
      });
    //console.log("MongoDB Connected...");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = connectDB;
