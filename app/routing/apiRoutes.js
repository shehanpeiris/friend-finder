// LOAD DATA
// Linking the routes to app's data sources
// ===============================================================================
var friendsData = require("../data/friends");

// ===============================================================================
// ROUTING

// Export this file for use by our server
module.exports = function(app) {
  
  // API GET Requests (what users see when they visit a specific URL)
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests (how app handles data user submits via survey form)
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    friendsData.push(req.body);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/api/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = [];
    res.json({ ok: true });
  });
};
