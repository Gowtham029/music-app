const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: String,
    username: String,
    userId: String,
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "createdAt" } }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
