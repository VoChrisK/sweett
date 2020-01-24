const express = require("express"); // creates new express server
const mongoose = require("mongoose");
const app = express();
const db = require("./config/keys").mongoURI;
const users = require("./routes/api/users");
const categories = require("./routes/api/categories");
const goals = require("./routes/api/goals");
const questions = require("./routes/api/questions");
const attempts = require("./routes/api/attempts");
const bodyParser = require("body-parser");

mongoose //connect to Mongoose
    .connect(db, { useNewUrlParser: true,
                useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    // const user = new User({
    //     username: "jim",
    //     email: "jim@jim.jim",
    //     password: "jimisgreat123"
    // });
    // user.save();
    res.send("Hello World!");
});

app.use("/api/users", users);
app.use("/api/categories", categories);
app.use("/api/goals", goals);
app.use("/api/questions", questions);
app.use("/api/attempts", attempts);

const port = process.env.PORT || 5000; //which port to run on

//creates a socket to listen for connections
app.listen(port, () => console.log(`Server is running on port ${port}`)); 