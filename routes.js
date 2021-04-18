//End points
//Functionality are in the controllers
const express = require('express'),
router = express.Router();

var userCtrl = require('./user-controller');

router.post('/users', userCtrl.createUser);//Complement the end of the URL to create a new record
router.get('/users', userCtrl.getUsers);//Complement the end of the URL to see all the records
router.get('/users/:id', userCtrl.getUser);//Complement the end of the URL to see one record by ID
router.put('/users/:id', userCtrl.updateUser);
router.delete('/users/:id', userCtrl.deleteUser);

module.exports.UPLOAD_PATH = "uploads";//Will tell MULTER where upload the file

var multer = require("multer");//Take care of uploading
var upload = multer({dest: module.exports.UPLOAD_PATH});//Create the instance of the multer
var imageCtrl = require('./image-controller');//Functionality in "image-controller.js"

router.post('/images', upload.single('image'), imageCtrl.uploadImage);//Route to create a new image
router.get('/images', imageCtrl.getImages);
router.get('/images/:id', imageCtrl.getImage);
router.delete('/images/:id', imageCtrl.deleteImage);

module.exports = router;