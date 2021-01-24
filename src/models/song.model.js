const mongoose = require("mongoose");
const { Schema } = mongoose;

const songSchema = new Schema(
  {
    title: String,
    albumName: String,
    duration: String,
    createdBy: String,
    updatedBy: String,
  },
  { timestamps: { createdAt: "createdAt", updatedAt: "createdAt" } }
);

const Song = mongoose.model("Songs", songSchema);

module.exports = Song;
