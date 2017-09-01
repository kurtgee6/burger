//var express = require("express");
//var bodyParser = require("body-parser");
//var methodOverride = require("method-override");
//
//var app = express();
//
//// Serve static content for the app from the "public" directory in the application directory.
//app.use(express.static("public"));
//
//// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({
//    extended: true
//}));
//// override with POST having ?_method=DELETE
//app.use(methodOverride("_method"));
//var exphbs = require("express-handlebars");
//
//app.engine("handlebars", exphbs({
//    defaultLayout: "main"
//}));
//app.set("view engine", "handlebars");
//
//var routes = require("./controllers/burgers_controller");
//
//app.use("/", routes);
//app.use("/update", routes);
//app.use("/create", routes);
//
//// listen on port 3000
//var port = process.env.PORT || 3000;
//app.listen(console.log("Listening on " + port));


//////////////////

// ------------------ Module Exports ---------------------------
var express = require('express');
var hdbs = require('express-handlebars');
var path = require('path');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var burgers_controller = require('./controllers/burgers_controller.js');
var api_controller = require('./controllers/api-controller.js');
var db = require('./models')
// ------------------ SETTING UP SERVER ---------------------------

// create express app
var app = express();
var port = process.env.PORT || 3000;


// set view engine to handelbars
app.engine('handlebars', hdbs({
    defaultLayout: 'main',
    layoutsDir: 'views/layouts'
}));

app.set('view engine', 'handlebars');

// serve static files to server (css, js, img)
app.use(express.static(path.join(__dirname, 'public')));

// parse body of incoming request
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json());
// allow overriding methods in query (?_method=put)
app.use(methodOverride('_method'));

// set up controller for api
app.use('/api/', api_controller)
// // set up controller for burgers
app.use('/', burgers_controller)

// sync up database
db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log('listen to port:', port)
    })
})
