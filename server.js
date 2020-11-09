// This will be your standard server.js file where you
// will initialize the server 
// boiler plate code

var express = require("express");

var app = express();

var htmlRoutes = require("./routes/htmlRoutes");
var apiRoutes = require("./routes/apiRoutes");

var PORT = process.env.PORT || 3008;    

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use("/", htmlRoutes);
app.use("/api", apiRoutes);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});



