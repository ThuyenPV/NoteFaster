const mongoose = require("mongoose");
const Task = require("../data/task.js");
const { mongooseToObject } = require("../../utils/mongoose");

class TaskController {
  // [GET] /tasks/:slug
  show(req, res, next) {
    Task.findOne({ slug: req.params.slug })
      .then((task) =>
        res.render("tasks", { course: mongooseToObject(task) })
      )
      .catch(next);
  }
  
  // [POST] /tasks/add-task
  addTask(req, res, next) {
    res.render("add-task");
  }

  deleteTask(req, res, next) {
    res.render("add-task");
  }
}

module.exports = new TaskController();
