// This will be your standard server.js file where you
// will initialize the server 
// boiler plate code

const express = require("express");

var app = express();

var PORT = process.env.PORT || 8008;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});



