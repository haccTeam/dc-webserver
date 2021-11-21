const express = require('express');
const path = require('path');

const haccTeamApp = express();
const port = 7777;

// stuff to send the file
haccTeamApp.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/stuff/test.txt'));
})

haccTeamApp.listen(port);
console.log('Server is up and running on http://localhost:' + port)