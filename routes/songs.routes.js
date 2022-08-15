const fs = require("fs");
const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + "-" + Date.now());
  },
});

const upload = multer({ storage: storage });

const express = require("express");

const { getSongs, getSong } = require("../controllers/songs.controller");
const Song = require("../models/song.models");

const songsRouter = express.Router();

// songsRouter.post(
//   "/",
//   upload.single("uploaded_file", (req, res) => {
//     const newSong = new Song({
//       name: req.body.name,
//       description: req.body.description,
//       file: {
//         data: fs.readFileSync(
//           path.join(__dirname, "/uploads/" + req.file.filename)
//         ),
//         contentType: "audio/mp3",
//       },
//     });

//     console.log(newSong.name, newSong.file);
//     //   newSong.save(function (err, data) {
//     //     if (err) {
//     //       console.log(err);
//     //     } else {
//     //       res.json(data);
//     //     }
//     //   });
//   })
// );

// songsRouter.post(
//   "/",
//   upload.single("uploaded_file", (req, res) => {
//     const obj = {
//       name: req.body.name,
//       description: req.body.description,
//       file: {
//         data: fs.readFileSync(
//           path.join(__dirname, "/uploads/" + req.file.filename)
//         ),
//         contentType: "audio/mp3",
//       },
//     };

//     const newSong = new Song({
//       name: obj.name,
//       description: obj.description,
//       file: obj.file,
//     });

//     newSong.save(function (err, data) {
//       if (err) {
//         console.log(err);
//       } else {
//         // res.json(data);
//         res.send("File Uploaded");
//       }
//     });
//   })
// );

songsRouter.get("/", getSongs);

songsRouter.get("/:songName", getSong);

module.exports = songsRouter;
