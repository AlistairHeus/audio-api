import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  playlists: Array,
});

const User = mongoose.model("User", userSchema);

module.exports = User;

const biswah = new User({
  name: "Jali ko aag",
  email: "bujhikorakh@kehtehain.com",
  password: "jisaagsebanebarood",
  playlists: ["usey biswanath kehte hain"],
});

console.log(
  biswah.name + "" + biswah.email + "" + biswah.password + "" + biswah.playlists
);
