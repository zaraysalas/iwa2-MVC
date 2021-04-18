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

//-----------Get all the images previously uploded-----------------------
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
//----------------Get one image by ID-------------------------------------
exports.getImage = function(req, res) {
    let imgId = req.params.id;

    Image.findById(imgId, (err, image) => {
        if (err) {
            return res.sendStatus(400);
        }

        res.setHeader('Content-Type', 'image/jpeg');
        fs.createReadStream(path.join(UPLOAD_PATH, image.filename)).pipe(res);
    });
};
//----------------Delete functionality by ID ----------------------------------
exports.deleteImage = function(req, res){
    let imgId = req.params.id;
    Image.findByIdAndRemove(imgId, (err, image)=>{
        if (err && image){
            return res.sendStatus(400);
        }
        del([path.join(UPLOAD_PATH, image.filename)]).then(deleted => {
            res.sendStatus(200);
        });
    });
};