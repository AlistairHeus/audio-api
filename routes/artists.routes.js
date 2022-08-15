const express = require("express");

const {
  postArtist,
  getArtists,
  getArtist,
} = require("../controllers/artists.controller");

const artistsRouter = express.Router();

artistsRouter.post("/", postArtist);

artistsRouter.get("/", getArtists);

artistsRouter.get("/:artistName", getArtist);

module.exports = artistsRouter;
