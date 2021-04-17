const express = require('express'),
router = express.Router();

//----------------GET---------------------------------------------
router.get('/hello', (req, res)=>{
    res.json({message: "Hello BScBest! ", data: [
        req.params.foo,
        req.params.bar
    ]});
});

//-----------------POST-------------------------------------------
router.post('/hello',(req, res)=>{
    res.json({result: 'Zaray send a post...',
    data: req.body});
});

module.exports = router;