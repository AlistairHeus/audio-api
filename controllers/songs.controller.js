const Song = require("../models/song.models");

// function postSong(req, res) {
//   // if (!req.body.name) {
//   //   return res.status(400).json({
//   //     error: "Song name not specified!",
//   //   });
//   // }

//   // if (!req.file) {
//   //   return res.status(400).json({
//   //     error: "Song file not specified!",
//   //   });
//   // }

// }

function getSongs(req, res) {
  Song.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
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
  );
}

module.exports = {
  getSongs,
  getSong,
};
