const express = require("express");
const router = express.Router();
const Attempt = require("../../models/Attempt");
const passport = require("passport");

//fetch all attempts based on question id into an array
router.get("/questions/:question_id", (req, res) => {
    Attempt.find({ question_id: req.params.question_id })
        .then(attempts => res.json(attempts))
        .catch(errors => res.status(400).json({ errors }));
});

//fetch all attempts in a category
router.get("/categories/:category_id", (req, res) => {
    Attempt.find({ category_id: req.params.category_id })
        .then(attempts => res.json(attempts))
        .catch(errors => res.status(400).json({ errors }));
});

//fetches an attempt object
router.get("/:id", (req, res) => {
    Attempt.findById(req.params.id)
        .then(attempt => res.json(attempt))
        .catch(errors => res.status(404).json({ errors }));
});

// testing with a attempts index
// router.get("/", (req, res) => {
//     Attempt.find({})
//         .then(attempts => res.json(attempts))
//         .catch(errors => res.status(404).json({ errors }));
// });

router.post("/", (req, res) => {
    const attempt = new Attempt({
        question_id: req.body.question_id,
        category_id: req.body.category_id,
        time: req.body.time
    });
    attempt.save()
        .then(attempt => res.json(attempt))
        .catch(errors => res.status(400).json({ errors }));
});

// //updates attempt
// router.patch("/:id", (req, res) => {
//     Attempt.findById(req.params.id)
//         .then(attempt => {
//             attempt.time = req.body.time;
//             attempt.save()
//                 .then(attempt => res.json(attempt))
//                 .catch(errors => res.status(400).json({ errors }));
//         })
//         .catch(errors => res.status(400).json({ errors }));
// });

//deletes attempt
router.delete("/:id", (req, res) => {
    Attempt.deleteOne({ _id: req.params.id })
        .then(attempt => res.json(attempt))
        .catch(errors => res.status(404).json({ errors }));
});

module.exports = router;
