const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8080;

require("dotenv").config();
//middleware to enable cors and parse json body as well as serving files from static folder
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello there");
});

app.listen(PORT, () => {
  console.log(`server has started on port ${PORT}`);
});
