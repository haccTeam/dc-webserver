const express = require('express');
const path = require('path');

const haccTeamApp = express();
const port = 7777;


// serve static files
haccTeamApp.use(express.static(__dirname + '/niceifyWebpage'));
// stuff to send the file

// placeholder stuff
haccTeamApp.get("/", function(req, res, next){
    res.sendFile(path.join(__dirname + '/niceifyWebpage/index.html'));
     
})
// END placeholder 

// get the key (url) for the file, which was requested



haccTeamApp.use('/stuff/:file', function(req, res, next){
   
    res.download("./stuff/" + req.params.file); // file name needs to be chaged? --> Maybe make a duplicate file and store in an seperate folder

})

haccTeamApp.listen(port);
console.log('Server is up and running on http://localhost:' + port)