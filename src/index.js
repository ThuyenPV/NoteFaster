const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

// HTTP Logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Routing
app.get("/", (req, res) => {
  res.render("home");
});

app.get("/search", (req, res) => {
  res.render("search");
});

app.get("/news", (req, res) => {
  console.log(req.query.q);
  res.render("news");
});

app.listen(3000);
