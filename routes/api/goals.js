const express = require("express");
const router = express.Router();
const Goal = require("../../models/Goal");
const validateGoalInput = require("../../validation/goals");
const passport = require("passport");

//fetch all goals based on category id
router.get("/categories/:category_id", (req, res) => {
    Goal.find({ category_id: req.params.category_id })
        .then(goals => res.json(goals))
        .catch(errors => res.status(400).json({ errors }));
});

router.get("/:id", (req, res) => {
    Goal.findById(req.params.id)
        .then(goal => res.json(goal))
        .catch(errors => res.status(404).json({ errors }));
});

// router.get("/", (req, res) => {
//     Goal.find({})
//         .then(goals => res.json(goals))
//         .catch(errors => res.status(404).json({ errors }));
// });

router.post("/", (req, res) => {
    const { errors, isValid } = validateGoalInput( req.body );

    if (!isValid) {
        return res.status(400).json(errors);
    }
    const goal = new Goal({ 
        description: req.body.description, 
        category_id: req.body.category_id, 
        expected: req.body.expected, 
        addToTotal: req.body.addToTotal
    });
    goal.save()
        .then(goal => res.json(goal))
        .catch(errors => res.status(400).json({ errors }));
});

//updates goal
router.patch("/:id", (req, res) => {
    const {errors, isValid} = validateGoalInput( req.body );
    if (!isValid) {
        return res.status(400).json(errors);
    }

    Goal.findById(req.params.id)
        .then(goal => {
            goal.description = req.body.description;
            goal.attempted = req.body.attempted
            goal.addToTotal = req.body.addToTotal;
            goal.date = req.body.date;
            goal.save()
                .then(goal => res.json(goal))
                .catch(errors => res.status(400).json({ errors }));
        })
        .catch(errors => res.status(400).json({ errors }));
});

//deletes goal
router.delete("/:id", (req, res) => {
    Goal.deleteOne({ _id: req.params.id })
        .then(goal => res.json(goal))
        .catch(errors => res.status(404).json({ errors }));
});

module.exports = router;