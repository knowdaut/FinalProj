import express from 'express';
import fetch from 'node-fetch';
import bodyParser from "body-parser";
//var bodyParser = require('body-parser');

fetch('http://www.boredapi.com/api/activity/')
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(error => console.log(error))





var app = express();
app.use(bodyParser.urlencoded({extended : true}))
app.set('view engine', 'ejs');






app.get('/', function(req, res){
    res.render('index');
    
})

app.listen(3333, function(){
    console.log("your app is running");
})