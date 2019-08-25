const express = require("express");
const bodyParser = require('body-parser');
const keys = require("./config/keys");

const app = express();
app.use(bodyParser.json());

//Require routes here

//On production server static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("ui/build"));

  // Express will serve up the index.html file
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "ui", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen();
