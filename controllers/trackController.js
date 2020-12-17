const express = require("express");
const router = express.Router();

const db = require("../models");

router.get("/tracks/:city/view", (req, res) => {
  db.Track.findAll({
    where: {
      city: req.params.city,
    },
  })
    .then((cityTracks) => {
      console.log(cityTracks);
      res.render("tracks", { tracks: cityTracks });
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
    res.render("edit-track", {
      id: result.id,
      name: result.name,
      city: result.city,
      trackType: result.trackType,
      address: result.address,
      availability: result.details,
    });
  });
});

router.post("/api/tracks", (req, res) => {
  console.log(req.body.zipCode);
  // console.log(typeof req.body.state);
  // console.log(typeof req.body.trackType);
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
      res.status(500).json(err);
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
