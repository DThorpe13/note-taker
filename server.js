// This will be your standard server.js file where you
// will initialize the server 
// boiler plate code

var express = require("express");
var fs = require("fs");


var app = express();

var PORT = process.env.PORT || 3008;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});



