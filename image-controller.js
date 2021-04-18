const UPLOAD_PATH = require('./routes').UPLOAD_PATH,
Image = require('./models/image'),
path = require('path'),
fs = require('fs'),
del = require('del');
//Functions itselves

//Upload a ne image and save it in "uploads" folder
exports.uploadImage = function(req, res){
    let newImage = new Image();//Instance of image
    //Asambling the data that we need, parts are in "image.js"
    newImage.filename = req.file.filename;
    newImage.originalName = req.file.originalname;
    newImage.desc = req.body.desc;
    newImage.save(err => {
        if (err){
            return res.sendStatus(400);
        }
        res.status(201).send({ newImage })
    });
};

exports.getImages = function(req,res){
    Image.find({}, '-__v')
    .lean()
    .exec((err, images) => {
        if(err){
            return res.sendStatus(400);
        }
        for(let i = 0; i < images.length; i++){
            var img = images[i];
            img.url = req.protocol + '://' + req.get('host') + '/images/' + img._id;
        }
        res.json(images);
    });
};