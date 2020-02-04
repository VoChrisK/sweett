const express = require("express");
const router = express.Router();
const Question = require("../../models/Question");
const validateQuestionInput = require("../../validation/questions");
const passport = require("passport");

//fetch all questions based on category id into an array
router.get("/category/:category_id", (req, res) => {
    Question.find({ category_id: req.params.category_id })
        .then(questions => res.json(questions))
        .catch(errors => res.status(400).json({ errors }));
});

//fetches a question object
router.get("/:id", (req, res) => {
    Question.findById(req.params.id)
        .then(question => res.json(question))
        .catch(errors => res.status(404).json({ errors }));
});

router.post("/", (req, res) => {
    const { errors, isValid } = validateQuestionInput(req.body);

    if (!isValid) {
        return res.status(400).json(errors);
    }

    const question = new Question({ 
        name: req.body.name, 
        category_id: req.body.category_id, 
        difficulty: req.body.difficulty,
        status: req.body.status,
        time: req.body.time
    });
    question.save()
        .then(question => res.json(question))
        .catch(errors => res.status(400).json({ errors }));
});

//updates question
router.patch("/:id", (req, res) => {
    const { errors, isValid } = validateQuestionInput(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Question.findById(req.params.id)
        .then(question => {
            question.name = req.body.name;
            question.status = req.body.status;
            question.difficulty = req.body.difficulty;
            question.time = req.body.time;
            question.save()
                .then(question => res.json(question))
                .catch(errors => res.status(400).json({ errors }));
        })
        .catch(errors => res.status(400).json({ errors }));
});

//deletes question
router.delete("/:id", (req, res) => {
    Question.deleteOne({ _id: req.params.id })
        .then(question => res.json(question))
        .catch(errors => res.status(404).json({ errors }));
});

module.exports = router;
