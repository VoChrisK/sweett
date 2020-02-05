const express = require("express");
const router = express.Router();
const Task = require("../../models/Task");
const validateTaskInput = require("../../validation/tasks");
const passport = require("passport");

//fetch all tasks based on category id into an array
router.get("/categories/:category_id", (req, res) => {
  Task.find({ category_id: req.params.category_id })
    .then(tasks => res.json(tasks))
    .catch(errors => res.status(400).json({ errors }));
});

//fetches an task object
router.get("/:id", (req, res) => {
  Task.findById(req.params.id)
    .then(task => res.json(task))
    .catch(errors => res.status(404).json({ errors }));
});

router.post("/", (req, res) => {
  const { errors, isValid } = validateTaskInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const task = new Task({
    name: req.body.name,
    category_id: req.body.category_id,
    status: req.body.status,
    time: req.body.time
  });
  task
    .save()
    .then(task => res.json(task))
    .catch(errors => res.status(400).json({ errors }));
});

//deletes task
router.delete("/:id", (req, res) => {
  Task.deleteOne({ _id: req.params.id })
    .then(task => res.json(task))
    .catch(errors => res.status(404).json({ errors }));
});

module.exports = router;
