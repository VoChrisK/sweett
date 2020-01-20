const express = require("express"); // creates new express server
const mongoose = require("mongoose");
const app = express();
const db = require("./config/keys").mongoURI;
mongoose //connect to Mongoose
    .connect(db, { useNewUrlParser: true })
    .then(() => console.log("Connected to MongoDB successfully"))
    .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World"));
const port = process.env.PORT || 5000; //which port to run on

app.listen(port, () => console.log(`Server is running on port ${port}`)); //creates a socket to listen for connections