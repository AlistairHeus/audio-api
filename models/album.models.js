const mongoose = require("mongoose");
const { Schema } = mongoose;

const albumSchema = new Schema({
  name: String,
  description: String,
  songs: Array,
  albumImage: String,
  dateReleased: Date,
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
