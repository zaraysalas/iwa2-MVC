//Functions define in "routes.js"
var User = require('./models/user')
//-------------Create-----------------
exports.createUser = function(req, res){
    var newuser = new User(req.body);
    newuser.save(function(err, user){
        if(err){
            res.status(400).json(err);
        }
        res.json(user);
    });
};

//-------------Get all users-------------------
exports.getUsers = function(req, res){
    User.find({}, function(err, users){
        if(err){
            res.status(400).json(err);
        }
        res.json(users);
    });
};

//------------Get a single user----------------------
exports.getUser = function(req, res){
    User.findOne({_id: req.params.id}, function(err, users){
        if(err){
            res.status(400).json(err);
        }
        res.json(users);
    });
};

//-------------Updating user based on ID -----------------
exports.updateUser = function(req, res){
    User.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function
        (err, users){
        if(err){
            res.status(400).json(err);
        }
        res.json(users);
    });
};

//---------------Deleting user by ID-----------------------------
exports.deleteUser = function(req, res){
    User.findByIdAndRemove({_id: req.params.id}, function(err, users){
        if(err){
            res.status(400).json(err);
        }
        res.json(users);
    });
};

//------------------------------Find by  ID -----------------
exports.updateUser = function(req, res){
    User.findByIdAndUpdate({_id: req.params.id}, req.body, {new: true}, function
        (err, users){
        if(err){
            res.status(400).json(err);
        }
        res.json(users);
    });
};