var express = require('express');
var router = express.Router();

/* GET home page. */
//router.get('/', function(req, res, next) {
 // res.render('index', { title: 'Express' });
//});

//module.exports = router;
router.get('/',function(req,res){
  res.send('Hello World')
})
router.post('/',function(req,res){
  res.send('Get a POST request')
})
router.put('/user',function(req,res){
  res.send('Got a PUT request at /user')
})
router.delete('/user',function(req,res){
  res.send('Got a DELETE request at /user')
})
module.exports = router;


var express = require('express');

