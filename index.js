const http = require('http'),
axios = require('axios'),
logger = require('morgan'),
cors = require('cors'),
express = require('express'),
bodyParser = require('body-parser');

var app = express();
var port = 8000;

app.use(bodyParser.json())
app.use(logger('tiny'));

//----------------GET---------------------------------------------
app.get('/hello', (req, res)=>{
    res.json({message: "Hello BScBest! ", data: [
        req.params.foo,
        req.params.bar
    ]});
});

//-----------------POST-------------------------------------------
app.post('/hello',(req, res)=>{
    res.json({result: 'Zaray send a post...',
    data: req.body});
});

app.listen(port, function(err){
    console.log('Listening on port: ' + port);
});