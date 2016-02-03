var mongoose = require('mongoose');
var User = mongoose.model('user');

//Index
exports.findAllUsers = function(req, res) {
    User.find(function(err, users) {
        if (err) res.send(500, err.message);
        console.log("GET/ user")
        res.status(200).jsonp(users);

    });
};

//GET - Return a TVShow with specified ID
exports.findUserById = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (err) return res.send(500, err.message);

        console.log('GET /user/' + req.params.id);
        res.status(200).jsonp(user);
    });
};


//POST
exports.addUser = function(req, res) {
    var newUser = new User({
        name: req.body.name,
        surname: req.body.surname,
        age: req.body.age,
        gender: req.body.gender,
        email: req.body.email
    });

    newUser.save(function(err, addedUser) {
        if (err) return res.status(500).send(err.message);
        res.status(200).jsonp(addedUser);
        //res.status(200).send(user);
        //res.status(200).send((results))

    });
};


//PUT
exports.updateUser = function(req, res) {
    user.findById(req.params.id, function(err, user) {
        user.name = req.body.name;
        user.surname = req.body.surname;
        user.age = req.body.age;
        user.gender = req.body.gender;
        user.email = req.body.email;

        user.save(function(err) {
            if (err) {
                return res.status(500).send(err.message);
            } else {
                res.status(200).jsonp(user);
            }
        });
    });
};

//DELETE
exports.deleteUser = function(req, res) {
    User.findById(req.params.id, function(err, user) {
        user.remove(function(err) {
            if (err) {
                return res.status(500).send(err.message);
            } else {
                res.status(200).send();
            }
        })
    });
};
