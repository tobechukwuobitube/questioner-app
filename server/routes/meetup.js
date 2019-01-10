const express = require("express");

const router = express.Router();

const meetups = [];
let id = 0;

router.post("/api/v1/meetups", (req, res) => {
  meetups.push({
    id: ++id,
    createdOn: Date.now(),
    locaton: req.body.location,
    images: ["image1.png", "image2,png"],
    topic: req.body.topic,
    happeningOn: 10/10/2019,
    tags: req.body.tags
  });
  return res.json({ message: "Created" });
});

router.get("/api/v1/meetups/:id", (req, res) => {
  const meetup = meetups.find(val => val.id === Number(req.params.id));
  return res.json({meetup});
});

router.get("/api/v1/meetups", (req, res) => {
  return res.json({
    status: 200,
    meetups
  });
});

router.post("/api/v1/meetups/:id/rsvps", (req, res) => {
  return res.json({
    status: 200,
    id: res.body.id,
    meetup: res.body.meetupId,
    user: res.body.userId,
    response: res.body.response,
    message: "RSVP created successfully"
  });
});

router.delete("/api/v1/meetups/:id", (req, res) => {
  const meetupIndex = meetups.findIndex(val => val.id === Number(req.param.id));
  meetups.splice(meetupIndex, 1);
  return res.json({ 
    status: 200,
    message: "Deleted",
    meetups
  });
});

module.exports = router;