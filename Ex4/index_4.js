const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", function (req, res) {
  fs.readFile("src/index_5.html", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    res.send(data);
  });
});