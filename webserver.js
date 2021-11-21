const express = require('express');
const path = require('path');

const haccTeamApp = express();
const port = 7777;

// stuff to send the file
haccTeamApp.get("/", function(req, res){
    res.send("ok")
})
haccTeamApp.use('/stuff/:file', function(req, res, next){
    // res.sendFile(path.join(__dirname, '/stuff/test.txt'));
    res.download("./stuff/" + req.params.file);
})

haccTeamApp.listen(port);
console.log('Server is up and running on http://localhost:' + port)