const Artist = require("../models/artist.models");

function postArtist(req, res) {
  if (!req.body.name) {
    return res.status(400).json({
      error: "Artist name not specified!",
    });
  }
  const newArtist = new Artist({
    name: req.body.name,
    description: req.body.description,
  });

  newArtist.save(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
}

function getArtists(req, res) {
  Artist.find(function (err, data) {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
}

function getArtist(req, res) {
  Artist.findOne(
    {
      name: req.params.artistName,
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
  postArtist,
  getArtists,
  getArtist,
};
