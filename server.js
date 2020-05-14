// requiring dependencies and defining the run port for the app
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

//middleware used to attach styling and scripts to public files and parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/Develop/public')));

//routing data for the api and html via their respective files
require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);

//starting server
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});


//  https://dry-harbor-34594.herokuapp.com/ Heroku deployed link