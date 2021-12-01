// used to test the folder-creation scripts. 



const fs = require('fs');


function makeFoldercode() {
    var newFoldercode = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 32; i++)
      newFoldercode += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return newFoldercode;
  }
  
  console.log(makeFoldercode());

  var dir = `./upload/${makeFoldercode()}`;

  if (!fs.existsSync(dir)){
      fs.mkdirSync(dir, { recursive: true });
  }
  
  