const express = require("express");
const morgan = require("morgan");

const app = express();
const port = 3000;

app.use(morgan(":method:status:url'HTTP/:http-version'"));

app.get("/", (req, res) => {
  res.end("Hello server of morgan app!");
});

// app listening here
app.listen(port, () => console.log("app is running on port 3000"));
