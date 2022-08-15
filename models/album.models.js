const mongoose = require("mongoose");
const { Schema } = mongoose;

const albumSchema = new Schema({
  name: String,
  description: String,
  songs: [{ type: Schema.Types.ObjectId, ref: "Song" }],
  albumImage: String,
  dateReleased: Date,
});

const Album = mongoose.model("Album", albumSchema);

module.exports = Album;
