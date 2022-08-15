// imports
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const albumsRouter = require("./routes/albums.routes");
const artistsRouter = require("./routes/artists.routes");
const songsRouter = require("./routes/songs.routes");

const uri =
  "mongodb+srv://alistairheus:manibasu@cluster0.0b7wi.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const app = express();

app.use(cors());

app.use(express.json());

app.use(express.static("public"));

app.use("/artists", artistsRouter);

app.use("/albums", albumsRouter);

app.use("/songs", songsRouter);

// routes
const PORT = 8000;

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log(`Database is now connected`);
});

app.listen(PORT || 5000, () => {
  console.log(`Server is now listening on port ${PORT}`);
});
