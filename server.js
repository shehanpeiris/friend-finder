// DEPENDENCIES (Require the npm packages needed for our server)
// ==============================================================================
var express = require("express");
var path = require("path");

// ==============================================================================
// CONFIGURE EXPRESS SERVER
var app = express();
var PORT = process.env.PORT || 2336;

// App middleware to parse data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ================================================================================
// ROUTES (Link to app's route files which serve as an app map depending on URLs)
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// =============================================================================
// LISTENER (starts the server)
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
