require("dotenv").config();
const app = require("../app.js");

const PORT = process.env.PORT || 9091;

app.listen(PORT, (err, req, res) => {
  if (err) {
    console.log("Sorry, something wrong with start server");
  }
  console.log(`Server was started om PORT: ${PORT}`);
});
