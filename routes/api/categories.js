const express = require("express");
const router = express.Router();
const Category = require("../../models/Category");
const passport = require("passport");

router.get("/", (req, res) => {
    Category.find()
        .then(categories => res.json(categories))
        .catch(errors => res.status(400).json({ errors }));
});

router.get("/:id", (req, res) => {
    Category.findOne({ id: req.params.id })
        .then(category => res.json(category))
        .catch(errors => res.status(404).json({ errors }));
});

//passport.authenticate("jwt", { session: false }) <-- add this later
router.post("/", (req, res) => {
    const category = new Category({ title: req.body.title });
    category.save()
        .then(category => res.json(category))
        .catch(errors => res.status(400).json({ errors }));
});

//update title of category
router.patch("/:id", (req, res) => {
    Category.updateOne({ id: req.params.id }, { $set: { title: req.body.title } })
        .then(category => res.json(category))
        .catch(errors => res.status(400).json({ errors }))
});

router.delete("/:id", (req, res) => {
    Category.deleteOne({ id: req.params.id })
        .then(category => res.json(category))
        .catch(errors => res.status(404).json({ errors }));
});

module.exports = router;