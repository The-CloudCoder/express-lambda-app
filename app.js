const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.json({ message: "Hello from Express on AWS Lambda!" });
});

app.get("/hello", (req, res) => {
  res.json({ message: "Hello World from Lambda!" });
});

module.exports = app;
