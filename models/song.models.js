const mongoose = require("mongoose");
const Album = require("./album.models");
const { Schema } = mongoose;

const songSchema = new Schema({
  name: String,
  description: String,
  file: String,
  album: { type: Schema.Types.ObjectId, ref: "Album" },
});
const Song = mongoose.model("Song", songSchema);

module.exports = Song;
