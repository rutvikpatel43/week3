/// <reference path="_reference.ts" />
var express = require('express');
var app = express();
var port = process.env.port || 3000;
// main route
app.get('/', function (rep, res) {
    res.send('hello Expree!');
});
//route for info page
app.get('/info', function (req, res) {
    res.send('Your Custom Info Page goes here');
});
app.listen(port, function () {
    console.log("App server Started ... on port:" + port);
});
//# sourceMappingURL=server.js.map