const mongoose = require("mongoose");

const { Schema } = mongoose;

const artistSchema = new Schema({
  name: String,
  description: String,
  albums: Array,
  artistImage: String,
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
