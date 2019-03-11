// LOAD DATA
// Linking the routes to app's data sources
// ===============================================================================
var friendsData = require("../data/friends.js");

// ===============================================================================
// ROUTING

// Export this file for use by our server
module.exports = function(app) {
  
  // API GET Requests (what users see when they visit a specific URL)
  app.get("/api/friends", function(req, res) {
    return res.json(friendsData);
  });

  // API POST Requests (how app handles data user submits via survey form)
  // Below code handles when a user submits a form and thus submits data to the server.
  // When a user submits form data (a JSON object), the object is pushed to the
  // friendsData array
  // ---------------------------------------------------------------------------

  app.post("/api/friends", function(req, res) {
    // req.body is available since we're using the body parsing middleware
    var newFriend = req.body;
    console.log(newFriend);
    friendsData.push(newFriend);
    res.json(newFriend);
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  // app.post("/api/clear", function(req, res) {
  //   // Empty out the arrays of data
  //   friendsData.length = [];
  //   res.json({ ok: true });
  // });
};
