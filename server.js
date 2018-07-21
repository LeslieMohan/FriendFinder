// npm packages to use
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');


// set up express app (server)
var app = express();


// connect
var PORT = process.env.PORT || 3000;
var connection;


app.use(express.static(__dirname + '/app/public')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


//Router info for server to locate files
//html
require('./app/routing/htmlRoutes.js')(app);

//api 
require('./app/routing/apiRoutes.js')(app);

//listener to "start" server

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});
