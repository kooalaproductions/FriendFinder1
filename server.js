var express = require('express');
var path = require('path');


var app = express();
var PORT = process.env.PORT || 8686;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app);

//listener
app.listen(PORT, function() {
	console.log("Server listening on: http://localhost:" + PORT);
});