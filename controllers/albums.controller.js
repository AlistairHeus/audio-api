const Album = require("../models/album.models");

function postAlbum(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Album name not specified!",
    });
  }
  const newAlbum = new Album({
    name: req.body.name,
    description: req.body.description,
  });

  newAlbum.save(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
}

function getAlbums(req, res) {
  Album.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  }).populate("songs");
}

function getAlbum(req, res) {
  Album.findOne(
    {
      name: req.params.AlbumName,
    },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    }
  );
}

module.exports = {
  postAlbum,
  getAlbums,
  getAlbum,
};
