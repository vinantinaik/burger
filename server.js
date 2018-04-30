var express = require('express');

var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;

require('./controllers/burgers_controller.js')(app);

app.use(express.static(path.join(__dirname, './public')));


// Start our server so that it can begin listening to client requests.
app.listen(PORT, function () {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});
