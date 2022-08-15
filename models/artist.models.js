const mongoose = require("mongoose");

const { Schema } = mongoose;

const artistSchema = new Schema({
  name: String,
  description: String,
  albums: Array,
});

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
