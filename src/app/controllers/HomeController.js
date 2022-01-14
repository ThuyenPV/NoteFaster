const mongoose = require("mongoose");
const Task = require("../data/task");
const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../utils/mongoose");

class HomeController {
  // [GET] /home
  index(req, res, next) {
    Task.find({})
      .then((task) => {
        res.render("home", { tasks: multipleMongooseToObject(task) });
      })
      .catch(next);
  }
}

module.exports = new HomeController();
