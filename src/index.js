const path = require("path");
const express = require("express");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const route = require("./routes");
const db = require("../src/config/db/configdb");
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Connect database
db.connect();

// HTTP Logger
app.use(morgan("combined"));

// Template engine
app.engine("hbs", engine({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

// Routing
route(app);

app.listen(PORT);
