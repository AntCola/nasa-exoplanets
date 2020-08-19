const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Main page loaded");
});

app.listen(port, () => {
  console.log("App listening on port 3000");
});
