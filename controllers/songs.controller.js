const Song = require("../models/song.models");

function postSong(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Song name not specified!",
    });
  }

  const newSong = new Song({
    name: req.body.name,
    description: req.body.description,
    album: req.body.album,
  });

  newSong.save(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
}

function getSongs(req, res) {
  Song.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  }).populate("album");
}

function getSong(req, res) {
  Song.findOne(
    {
      name: req.params.SongName,
    },
    function (err, data) {
      if (err) {
        console.log(err);
      } else {
        res.json(data);
      }
    }
  ).populate("album");
}

module.exports = {
  getSongs,
  getSong,
  postSong,
};
