const express = require("express");
const router = express.Router();
const taskController = require("../app/controllers/TaskController");

router.get("/add-task", taskController.addTask);
router.delete("/delete/:slug", taskController.addTask);
router.get("/:slug", taskController.show);

module.exports = router;
 