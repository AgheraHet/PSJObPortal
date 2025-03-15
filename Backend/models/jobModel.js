const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: String,
  company: String,
  location: String,
  link: String,
  // experience: String,
});

module.exports = mongoose.model("linkedin_jobs", jobSchema);
