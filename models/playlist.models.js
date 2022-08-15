import mongoose from "mongoose";
const { Schema } = mongoose;

const playlistSchema = new Schema({
  name: String,
  description: String,
  songs: Array,
});
