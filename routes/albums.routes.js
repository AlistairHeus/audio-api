const express = require("express");

const {
  postAlbum,
  getAlbums,
  getAlbum,
} = require("../controllers/Albums.controller");

const albumsRouter = express.Router();

albumsRouter.post("/", postAlbum);

albumsRouter.get("/", getAlbums);

albumsRouter.get("/:albumId", getAlbum);

module.exports = albumsRouter;
