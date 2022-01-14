const homeRoute = require("./home");
const taskRoute = require("./task");

function routeHome(app) {
  app.use("/tasks", taskRoute);
  app.use("/", homeRoute);
}

module.exports = routeHome;
