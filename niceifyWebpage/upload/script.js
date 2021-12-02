const main = require("/webserver.js") // filename and foldercode needs to be exported

window.onload = function(){
    // Where file name gets stored 
    var filename = "TEST";
    var foldername; // maybe later
    
    // Gets the header and assign name + text value
    document.getElementById('text').innerHTML = this.name + " successfully uploaded!";
};