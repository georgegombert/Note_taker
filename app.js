const express = require("express");
const path = require("path");
var noteData = require("./Develop/db/db.json");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/Develop/public')));


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "/Develop/public/notes.html"));
});

app.get("/api/notes", function (req, res) {
  return res.json(noteData);
});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});