const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const contactsRouter = require("./routes/api/contacts.js");
const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(express.json()); //* мідлвал для перетворення інфи у  req.body

app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ status: "fail", code: 400, message: "Not found" }); //* обрабка не існуючого запиту
});

app.use((err, req, res, next) => {
  res.status(500).json({ status: "fail", cod: 500, message: err.message });
}); //* обробка помиоки при виконанні коду

module.exports = app;
