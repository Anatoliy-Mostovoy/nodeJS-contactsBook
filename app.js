const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
