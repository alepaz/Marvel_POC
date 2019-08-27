const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//Require routes here
require('./routes/Api')(app);

//On production server static files
if (process.env.NODE_ENV === "production") {
  app.use(express.static("./marvel_poc_ui/build"));

  // Express will serve up the index.html file
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "marvel_poc_ui", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
