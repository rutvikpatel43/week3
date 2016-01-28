/// <reference path="_reference.ts" />
import express = require('express');

var app:express.Express = express();

var port:number = process.env.port || 3000
// main route
app.get('/', function(rep:express.Request, res:express.Respone) {
    res.send('hello Expree!');
});
//route for info page
app.get('/info', function(req:express.Request, res:express.Respone){
   res.send('Your Custom Info Page goes here'); 
});

app.listen(port, function(){
    console.log("App server Started ... on port:" + port);
});