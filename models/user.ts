const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  phoneNumber: String,
  role: { type: String, enum: ["Owner", "Admin", "Student"] },
  otp: String,
  otpExpires: Date,
});

module.exports = mongoose.model("User", userSchema);
