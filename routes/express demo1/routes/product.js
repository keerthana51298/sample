var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
//});

//module.exports = router;
router.get('/product',function(req,res){
  res.send('Hello World')
})
router.post('/product',function(req,res){
  res.send('Get a POST request')
})
router.put('/product',function(req,res){
  res.send('Got a PUT request at /user')
})
router.delete('/product',function(req,res){
  res.send('Got a DELETE request at /user')
})
module.exports = router;