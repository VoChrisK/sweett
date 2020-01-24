const express = require("express");
const router = express.Router();
const Category = require("../../models/Category");
const validateCategoryInput = require("../../validation/categories");
const passport = require("passport");

//fetch all categories based on user id
router.get("/:user_id", (req, res) => {
    Category.find({user_id: req.params.user_id })
    .then(categories => res.json(categories))
    .catch(errors => res.status(400).json({ errors }));
});

router.get("/:id", (req, res) => {
    Category.findById(req.params.id)
    .then(category => res.json(category))
    .catch(errors => res.status(404).json({ errors }));
});

router.post("/", (req, res) => {
    const { errors, isValid } = validateCategoryInput({title: req.body.title});

    if(!isValid) {
        return res.status(400).json(errors);
    }

    const category = new Category({ title: req.body.title });
    category.save()
    .then(category => res.json(category))
    .catch(errors => res.status(400).json({ errors }));
});

//updates title of category
router.patch("/:id", (req, res) => {
    const { errors, isValid } = validateCategoryInput({ title: req.body.title });

    if (!isValid) {
        return res.status(400).json(errors);
    }

    Category.findById(req.params.id)
    .then(category => {
        category.title = req.body.title;
        category.save()
        .then(category => res.json(category));
    })
    .catch(errors => res.status(400).json({ errors }));
});

//updates actual completion time of category
router.patch("/:id/actual"), (req, res) => {
    Category.findById(req.params.id)
        .then(category => {
            category.actual = req.body.actual;
            category.save()
                .then(category => res.json(category));
        })
        .catch(errors => res.status(400).json({ errors }));
}

//updates expected completion time of category
// router.patch("/expected/:id/"), (req, res) => {
//     Category.findById(req.params.id)
//         .then(category => {
//             category.expected = req.body.expected;
//             category.save()
//                 .then(category => res.json(category));
//         })
//         .catch(errors => res.status(400).json({ errors }));
// }

// //updates progress of category
// router.patch("/:id/actual"), (req, res) => {
//     Category.findById(req.params.id)
//         .then(category => {
//             category.progress = req.body.progress;
//             category.save()
//                 .then(category => res.json(category));
//         })
//         .catch(errors => res.status(400).json({ errors }));
// }

router.delete("/:id", (req, res) => {
    Category.deleteOne({ id: req.params.id })
    .then(category => res.json(category))
    .catch(errors => res.status(404).json({ errors }));
});

module.exports = router;