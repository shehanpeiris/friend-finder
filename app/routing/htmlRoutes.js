// DEPENDENCIES (Require the npm packages needed for our server)
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTES

// Export this file for use by server
module.exports = function(app) {
  
  // HTML GET Requests (what users see when they visit a specific URL)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
