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

app.get("/api/notes/:id", function(req, res) {
  const chosen = req.params.id;
  return res.json(noteData[chosen]);
});

app.post("/api/notes", function(req, res) {
    noteData.push(req.body);
    res.json(true);
});

app.delete("/api/notes/:id", function(req, res) {
  const idCall = req.params.id;
  noteData = noteData.filter(note => note.id !== idCall);
  res.json(true);
});


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});