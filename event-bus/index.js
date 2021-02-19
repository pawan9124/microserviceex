const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

const events = [];

app.post("/events", (req, res) => {
  const event = req.body;
  /* pushing every events for backup to events */
  events.push(event);
  /* Post Service */
  axios.post("htpp://localhost:4000/events", event);
  /* Comment Service */
  axios.post("htpp://localhost:4001/events", event);
  /* Query Service */
  axios.post("htpp://localhost:4002/events", event);
  /* Moderation Service */
  axios.post("htpp://localhost:4003/events", event);
  res.status(201).send({ message: "Event created and send" });
});

app.get("/events", (req, res) => {
  res.send(events);
});

app.listen(4005, () => console.log("Listening on port 4005"));
