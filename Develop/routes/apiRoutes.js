let noteData = require("../db/db.json");
const fs = require("fs");


module.exports = app => {
  app.get("/api/notes", function (req, res) {
    return res.json(noteData);
  });
  
  app.get("/api/notes/:id", function (req, res) {
    const chosen = req.params.id;
    return res.json(noteData[chosen]);
  });
  
  app.post("/api/notes", function (req, res) {
    noteData.push(req.body);
    fs.writeFile("./Develop/db/db.json", JSON.stringify(noteData), () => console.log("note Saved"));
    res.json(true);
  });
  
  app.delete("/api/notes/:id", function (req, res) {
    const idCall = req.params.id;
    noteData = noteData.filter(note => note.id !== idCall);
    fs.writeFile("./Develop/db/db.json", JSON.stringify(noteData), (err) => console.log(err));
    res.json(true);
  });
}