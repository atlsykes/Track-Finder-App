const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/track", (req, res) => {
  db.Track.findAll({})
    .then((allTracks) => {
      console.log(allTracks);
      res.render("tracks", { tracks: allTracks });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/track/new", (req, res) => {
  res.render("new-track");
});

router.get("/tracks/:id/edit", (req, res) => {
  db.Track.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log(result);
    res.render("edit-track", result);
  });
});

router.post("/api/tracks", (req, res) => {
  db.Track.create(req.body)
    .then((newTrack) => {
      res.json(newTrack);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.put("/api/tracks/:id", (req, res) => {
  db.Track.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((updatedTrack) => {
      res.json(updatedTrack);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.delete("/api/tracks/:id", (req, res) => {
  db.Track.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((response) => {
      console.log(response);
      res.json(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
