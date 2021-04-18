//Funtionalities - What is does
exports.getWorld = function(req, res){
    res.json({result:'Hello World from Controller'})
}

//----------------GET---------------------------------------------
exports.getWorldParams = function(req, res){
    res.json({message: "Hello BScBest! ", data: [
        req.params.foo,
        req.params.bar
    ]});
};

//-----------------POST-------------------------------------------
exports.postWorld = function(req, res){
    res.json({result: 'Zaray send a post...',
    data: req.body});
};