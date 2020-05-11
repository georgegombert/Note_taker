const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, '/Develop/public')));


require("./Develop/routes/apiRoutes")(app);
require("./Develop/routes/htmlRoutes")(app);


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//  https://dry-harbor-34594.herokuapp.com/ Heroku deployed link