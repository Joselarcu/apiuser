var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    methodOverride = require("method-override"),
    mongoose = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost/users', function(err, res) {
    if (err) throw err;
    console.log('Connected to Database');
});

// Middlewares
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models = require('./models/user')(app, mongoose);
var userCtrl = require('./controllers/user');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
    res.send("Hello world!");
});
app.use(router);

// API routes
var user = express.Router();

user.route('/user')
    .get(userCtrl.findAllUsers)
    .post(userCtrl.addUser);

user.route('/user/:id')
    .get(userCtrl.findUserById)
    .put(userCtrl.updateUser)
    .delete(userCtrl.deleteUser);

app.use('/api', user);

// Start server
app.listen(3000, function() {
    console.log("Node server running on http://localhost:3000");
});
